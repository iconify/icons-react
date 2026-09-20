import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nnglg9b7v {
  fill: currentColor;
  d: path("M216 64h-68.69l34.35-34.34a8 8 0 1 0-11.32-11.32L128 60.69L85.66 18.34a8 8 0 0 0-11.32 11.32L108.69 64H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 136H40V80h176zm-16-100v80a4 4 0 0 1-4 4H60a4 4 0 0 1-4-4v-80a4 4 0 0 1 4-4h136a4 4 0 0 1 4 4");
}
</style><path class="nnglg9b7v"/>`,
		"fallback": "ph:television-simple-fill",
	});
}

export default Component;

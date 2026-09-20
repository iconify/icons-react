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
		"content": `<style>.z-it7hw-f {
  fill: currentColor;
  d: path("M224 176v24a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-24a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16-88H48a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16M104 48h16v16a8 8 0 0 0 16 0V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16");
}
</style><path class="z-it7hw-f"/>`,
		"fallback": "ph:rows-plus-top-fill",
	});
}

export default Component;

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
		"content": `<style>.icwmy3b6e {
  fill: currentColor;
  d: path("M240 96v80a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8v-32H24a8 8 0 0 1-8-8V96c0-13.23 11.36-24 25.33-24H56V40a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8v32h14.67C228.64 72 240 82.77 240 96M72 72h112V48H72Zm112 88H72v48h112Zm16-44a12 12 0 1 0-12 12a12 12 0 0 0 12-12");
}
</style><path class="icwmy3b6e"/>`,
		"fallback": "ph:printer-fill",
	});
}

export default Component;

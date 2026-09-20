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
		"content": `<style>.f4z89fbbg {
  fill: currentColor;
  d: path("M216 144h-16V80h16a8 8 0 0 0 0-16h-16V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v24H40a8 8 0 0 0 0 16h16v64H40a8 8 0 0 0 0 16h16v56a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-56h16a8 8 0 0 0 0-16m-88-28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m0 24a28 28 0 1 1-28 28a28 28 0 0 1 28-28");
}
</style><path class="f4z89fbbg"/>`,
		"fallback": "ph:traffic-signal-fill",
	});
}

export default Component;

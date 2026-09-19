import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jsxicibnj {
  fill: currentColor;
  d: path("M10.02 6L8.61 7.41L13.19 12l-4.58 4.59L10.02 18l6-6z");
}
</style><path class="jsxicibnj"/>`,
		"fallback": "ic:outline-navigate-next",
	});
}

export default Component;

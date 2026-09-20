import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.esw2u8aaz {
  fill: currentColor;
  d: path("M14 11.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5zM3 11h10V9H3zm0-3h10V6H3zm0-3h10v-.5A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5z");
}
</style><path class="esw2u8aaz"/>`,
		"fallback": "fluent:layout-row-four-focus-bottom-16-filled",
	});
}

export default Component;

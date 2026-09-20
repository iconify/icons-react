import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j1zbu_b0w {
  fill: currentColor;
  d: path("M29 7.5A4.5 4.5 0 0 0 24.5 3h-17A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5zM16 4v24H7.5A3.5 3.5 0 0 1 4 24.5v-17A3.5 3.5 0 0 1 7.5 4z");
}
</style><path class="j1zbu_b0w"/>`,
		"fallback": "fluent:layout-column-two-focus-right-32-light",
	});
}

export default Component;

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
		"content": `<style>.w_cf2j2rt {
  fill: currentColor;
  d: path("M3 24.5A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3h-17A4.5 4.5 0 0 0 3 7.5zM16 28V4h8.5A3.5 3.5 0 0 1 28 7.5v17a3.5 3.5 0 0 1-3.5 3.5z");
}
</style><path class="w_cf2j2rt"/>`,
		"fallback": "fluent:layout-column-two-focus-left-32-light",
	});
}

export default Component;

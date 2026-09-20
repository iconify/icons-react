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
		"content": `<style>.vh1ft1gip {
  fill: currentColor;
  d: path("M3 24.5A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3h-17A4.5 4.5 0 0 0 3 7.5zM16 27V5h8.5A2.5 2.5 0 0 1 27 7.5v17a2.5 2.5 0 0 1-2.5 2.5z");
}
</style><path class="vh1ft1gip"/>`,
		"fallback": "fluent:layout-column-two-focus-left-32-filled",
	});
}

export default Component;

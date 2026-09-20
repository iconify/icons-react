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
		"content": `<style>.i0-q-0b3t {
  fill: currentColor;
  d: path("M17.75 21h-5v-8.25H21v5A3.25 3.25 0 0 1 17.75 21M21 11.25h-8.25V3h5A3.25 3.25 0 0 1 21 6.25zM6.25 3h5v18h-5A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3");
}
</style><path class="i0-q-0b3t"/>`,
		"fallback": "fluent:layout-column-two-split-right-24-filled",
	});
}

export default Component;

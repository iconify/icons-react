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
		"content": `<style>.o1j01kbtb {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zM3 4.5A1.5 1.5 0 0 1 4.5 3h5v10h-5A1.5 1.5 0 0 1 3 11.5zm7.5 8.5V3h1A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5z");
}
</style><path class="o1j01kbtb"/>`,
		"fallback": "fluent:layout-column-one-third-right-16-regular",
	});
}

export default Component;

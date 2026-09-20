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
		"content": `<style>.f67_eacmv {
  fill: currentColor;
  d: path("M4 14.346v-1h7v1zM4 18v-1h7v1zm0-7.346v-1h7v1zM4 7V6h7v1zm11.616 11q-.667 0-1.141-.475T14 16.386v-8.77q0-.666.475-1.14T15.615 6h2.77q.666 0 1.14.475T20 7.615v8.77q0 .666-.475 1.14t-1.14.475z");
}
</style><path class="f67_eacmv"/>`,
		"fallback": "material-symbols-light:vertical-split",
	});
}

export default Component;

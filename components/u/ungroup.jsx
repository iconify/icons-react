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
		"content": `<style>.bko8d7qgx {
  fill: currentColor;
  d: path("m8.7 15.989l-.688-.689l4.8-4.8H8.5v-1h6v6h-1v-4.311zM19 12V5h-7V4h8v8zM5.616 20q-.691 0-1.153-.462T4 18.384V4h1v14.385q0 .23.192.423t.423.192H20v1z");
}
</style><path class="bko8d7qgx"/>`,
		"fallback": "material-symbols-light:ungroup",
	});
}

export default Component;

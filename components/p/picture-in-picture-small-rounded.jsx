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
		"content": `<style>.o_21-fbtu {
  fill: currentColor;
  d: path("M3.5 19q-.213 0-.356-.144T3 18.499t.144-.356T3.5 18h15.885q.23 0 .423-.192t.192-.424V5.5q0-.213.144-.356T20.501 5t.356.144T21 5.5v11.885q0 .69-.462 1.153T19.385 19zm7.23-3.384q-.342 0-.575-.233t-.232-.575V10.73q0-.343.232-.576t.576-.232h6.077q.343 0 .575.232t.233.576v4.077q0 .343-.233.575t-.575.233z");
}
</style><path class="o_21-fbtu"/>`,
		"fallback": "material-symbols-light:picture-in-picture-small-rounded",
	});
}

export default Component;

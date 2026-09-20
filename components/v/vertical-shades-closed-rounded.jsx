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
		"content": `<style>.wbxzg_b0c {
  fill: currentColor;
  d: path("M3.5 20q-.213 0-.356-.144T3 19.499t.144-.356T3.5 19H5V5.616q0-.667.475-1.141T6.615 4h10.77q.666 0 1.14.475T19 5.615V19h1.5q.213 0 .356.144t.144.357t-.144.356T20.5 20zM6 19h2.25V5H6.616q-.27 0-.443.173T6 5.616zm3.25 0h2.25V5H9.25zm3.25 0h2.25V5H12.5zm3.25 0H18V5.616q0-.27-.173-.443T17.385 5H15.75z");
}
</style><path class="wbxzg_b0c"/>`,
		"fallback": "material-symbols-light:vertical-shades-closed-rounded",
	});
}

export default Component;

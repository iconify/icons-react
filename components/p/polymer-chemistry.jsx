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
		"content": `<style>.ck_u0yb4k {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m12 10.493l-1.727-2.585h-.001Q9.303 6.459 8 6.696Q6.696 6.46 5.727 7.908l-3.612 5.405q-1.388 2.079.69 3.468t3.468-.689L8 13.507l1.728 2.585q.969 1.449 2.272 1.212q1.304.236 2.273-1.212L16 13.507l1.728 2.585q1.389 2.077 3.467.689q2.078-1.389.69-3.468l-3.612-5.405h-.001Q17.303 6.459 16 6.696q-1.304-.236-2.273 1.212z");
}
</style><path class="ck_u0yb4k"/>`,
		"fallback": "uix-solid:polymer-chemistry",
	});
}

export default Component;

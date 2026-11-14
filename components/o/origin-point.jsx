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
		"content": `<style>.e6-s91bhm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.75 9.5q0 6.328 6.741 12.551q.052.048.111.085t.125.063t.134.038t.139.013t.139-.013t.134-.038q.065-.026.125-.063q.059-.037.111-.085Q19.25 15.828 19.25 9.5q0-3.003-2.123-5.127T12 2.25T6.873 4.373Q4.75 6.497 4.75 9.5m4.5 0q0-2.75 2.75-2.75t2.75 2.75T12 12.25T9.25 9.5");
}
</style><path class="e6-s91bhm"/>`,
		"fallback": "uix-solid:origin-point",
	});
}

export default Component;

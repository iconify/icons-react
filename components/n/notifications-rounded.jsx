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
		"content": `<style>.eogd0qieq {
  fill: currentColor;
  d: path("M5.5 18.77q-.213 0-.356-.145T5 18.268t.144-.356t.356-.143h1.116V9.846q0-1.96 1.24-3.447T11 4.546V4q0-.417.291-.708q.291-.292.707-.292t.709.292T13 4v.546q1.904.365 3.144 1.853t1.24 3.447v7.923H18.5q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm6.497 2.615q-.668 0-1.14-.475t-.472-1.14h3.23q0 .67-.475 1.142q-.476.472-1.143.472");
}
</style><path class="eogd0qieq"/>`,
		"fallback": "material-symbols-light:notifications-rounded",
	});
}

export default Component;

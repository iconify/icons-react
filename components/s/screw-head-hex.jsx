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
		"content": `<style>.mijqayied {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 12q-.001 4.039 2.855 6.896T12 21.753t6.895-2.857T21.75 12q.001-4.039-2.855-6.896T12 2.247q-4.04 0-6.895 2.857Q2.249 7.961 2.25 12m13.333-3.955l1.634 2.83q.649 1.125 0 2.25l-1.634 2.83q-.65 1.125-1.949 1.125h-3.268q-1.299 0-1.949-1.125l-1.634-2.83q-.649-1.125 0-2.25l1.634-2.83q.65-1.125 1.949-1.125h3.268q1.299 0 1.949 1.125");
}
</style><path class="mijqayied"/>`,
		"fallback": "uix-solid:screw-head-hex",
	});
}

export default Component;

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
		"content": `<style>.hy3ymub6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h8v5.5h-8Zm11 0h8v5.5h-8Zm-7 5.5V11q4.336 2.759 8.672 1.168m1.048-.448q.64-.313 1.28-.72V8.5m.5 6V18m0 3h.01");
}
</style><path class="hy3ymub6m"/>`,
		"fallback": "uix-sharp:ip-conflict",
	});
}

export default Component;

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
		"content": `<style>.mkksvcbdq {
  cx: 7px;
  cy: 7.5px;
  r: 2.75px;
}

.uyiddkvas {
  d: path("M2.75 15.25h12l3.75-5.5m-13.25 5.5v4.5m9.5-4.5v4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="mkksvcbdq"/><path class="uyiddkvas"/></g>`,
		"fallback": "iconoven:sun-lounger-sharp",
	});
}

export default Component;

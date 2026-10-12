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
		"content": `<style>.f1ejl_brg {
  d: path("M14.25 21.25h-.5v-.5a3.75 3.75 0 0 1 7.5 0v.5h-.5ZM6.5 5.75a7.5 5 0 0 1 11 0m-.43-2.72l.43 2.72l-2.72.43");
}

.j35vzzkcl {
  cx: 6.5px;
  cy: 11px;
  r: 2.5px;
}

.oag1fiv-v {
  cx: 17.5px;
  cy: 11px;
  r: 2.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xr4p8qxmv {
  d: path("M3.25 21.25h-.5v-.5a3.75 3.75 0 0 1 7.5 0v.5h-.5Z");
}
</style><g class="x2cwu0gfd"><circle class="j35vzzkcl"/><path class="xr4p8qxmv"/><circle class="oag1fiv-v"/><path class="f1ejl_brg"/></g>`,
		"fallback": "iconoven:referral-sharp",
	});
}

export default Component;

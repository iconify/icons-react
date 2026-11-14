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
		"content": `<style>.bo9l5xzrv {
  d: path("M10 8.5c-1 0-1.25.5-1.25 1.25V11c0 .5-.5 1-1.25 1c.75 0 1.25.5 1.25 1v1.25C8.75 15 9 15.5 10 15.5m4-7c1 0 1.25.5 1.25 1.25V11c0 .5.5 1 1.25 1c-.75 0-1.25.5-1.25 1v1.25c0 .75-.25 1.25-1.25 1.25");
}

.t68qcrbio {
  d: path("M4.5 10A7.5 7.5 0 0 1 12 2.5h7.5V14a7.5 7.5 0 0 1-7.5 7.5H4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t68qcrbio"/><path class="bo9l5xzrv"/></g>`,
		"fallback": "uix-sharp:nosql-document",
	});
}

export default Component;

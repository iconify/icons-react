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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nwutz1bxa {
  d: path("M10.5 6.75V4.5a1.5 1.5 0 0 1 3 0v2.25M10 21.25V17.5a2 2 0 0 1 4 0v3.75");
}

.p446y1enm {
  d: path("m12.42 6.01l8.41 5.23q.42.26-.08.26H20q-.5 0-.5.5v8.75q0 .5-.5.5H5q-.5 0-.5-.5V12q0-.5-.5-.5h-.75q-.5 0-.08-.26l8.41-5.23q.42-.26.84 0");
}
</style><g class="hntgybcog"><path class="p446y1enm"/><path class="nwutz1bxa"/></g>`,
		"fallback": "iconoven:monastery",
	});
}

export default Component;

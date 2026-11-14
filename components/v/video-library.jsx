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
		"content": `<style>.f7zktpbjv {
  d: path("M13 2.5h5A3.5 3.5 0 0 1 21.5 6v12a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 9.5 18V6A3.5 3.5 0 0 1 13 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xb7a33hjc {
  d: path("m15.86 10.152l.885.619a1.5 1.5 0 0 1 0 2.458l-.885.619a1.5 1.5 0 0 1-2.36-1.229v-1.238a1.5 1.5 0 0 1 2.36-1.229M3 5.5v16m3.5-18v18");
}
</style><g class="hntgybcog"><path class="f7zktpbjv"/><path class="xb7a33hjc"/></g>`,
		"fallback": "uix:video-library",
	});
}

export default Component;

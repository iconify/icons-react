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
		"content": `<style>.ezfqoj2xi {
  d: path("M5.072 8A8 8 0 0 1 20 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.im7qxmblz {
  d: path("M18.5 10.5L20 12l1.5-1.5M18.928 16A8 8 0 0 1 4 12");
}

.m_douo8fq {
  d: path("M2.5 13.5L4 12l1.5 1.5");
}

.nn369yb4f {
  d: path("M10.25 9.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M8.75 16c0-1.75 1.5-2.75 3.25-2.75s3.25 1 3.25 2.75Z");
}
</style><g class="hntgybcog"><path class="nn369yb4f"/><path class="ezfqoj2xi"/><path class="im7qxmblz"/><path class="m_douo8fq"/></g>`,
		"fallback": "uix:job-rotation",
	});
}

export default Component;

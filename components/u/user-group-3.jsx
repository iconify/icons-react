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
		"content": `<style>.f_im5073a {
  d: path("M3.5 20.25h3a.75.75 0 0 0 .75-.75c0-2.9-1-5-2.25-5s-2.25 2.1-2.25 5a.75.75 0 0 0 .75.75m14 0h3a.75.75 0 0 0 .75-.75c0-2.9-1-5-2.25-5s-2.25 2.1-2.25 5a.75.75 0 0 0 .75.75");
}

.gl0zqx06v {
  cx: 5px;
  cy: 8.75px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kz9qc0sgp {
  cx: 12px;
  cy: 9.75px;
  r: 2.25px;
}

.m2loeebgf {
  d: path("M10.5 20.25h3a.75.75 0 0 0 .75-.75c0-2.9-1-5-2.25-5s-2.25 2.1-2.25 5a.75.75 0 0 0 .75.75");
}

.vonm2g1wy {
  cx: 19px;
  cy: 8.75px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="gl0zqx06v"/><circle class="vonm2g1wy"/><path class="f_im5073a"/><circle class="kz9qc0sgp"/><path class="m2loeebgf"/></g>`,
		"fallback": "iconoven:user-group-3",
	});
}

export default Component;

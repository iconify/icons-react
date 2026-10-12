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
		"content": `<style>.b935a6b9v {
  d: path("m4.75 8.5l5.75-5.75m-5.75 11l11-11m-8 13.5l11.5-11.5M13 16.25L19.25 10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l7z97lb6j {
  width: 18.5px;
  height: 2.5px;
  x: 2.75px;
  y: 18.75px;
  rx: 0.75px;
}

.v0w955btf {
  width: 14.5px;
  height: 13.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="v0w955btf"/><path class="b935a6b9v"/><rect class="l7z97lb6j"/></g>`,
		"fallback": "iconoven:stretch-wrap",
	});
}

export default Component;

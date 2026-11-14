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
		"content": `<style>.a-g282zfq {
  d: path("M14.5 2.5V7H19M8 16a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0Zm5 0V9.75");
}

.s8thi1btf {
  d: path("M5 4.5a2 2 0 0 1 2-2h7.5L19 7v12.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s8thi1btf"/><path class="a-g282zfq"/></g>`,
		"fallback": "uix-sharp:sight-reading",
	});
}

export default Component;

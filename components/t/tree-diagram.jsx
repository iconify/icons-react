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
		"content": `<style>.bb_88jbls {
  width: 8px;
  height: 4.5px;
  x: 13.25px;
  y: 4.25px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.im8q8_9pa {
  width: 5px;
  height: 4.5px;
  x: 2.75px;
  y: 9.75px;
  rx: 1.25px;
}

.o0dk0j8ua {
  width: 8px;
  height: 4.5px;
  x: 13.25px;
  y: 15.25px;
  rx: 1.25px;
}

.y43hmmb5e {
  d: path("M7.75 12h3m2.5-5.5h-1a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h1");
}
</style><g class="hntgybcog"><rect class="im8q8_9pa"/><path class="y43hmmb5e"/><rect class="bb_88jbls"/><rect class="o0dk0j8ua"/></g>`,
		"fallback": "iconoven:tree-diagram",
	});
}

export default Component;

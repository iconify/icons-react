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
		"content": `<style>.ebrzzz9_q {
  d: path("M6.5 9.75L8.75 12L6.5 14.25m4.5 0h2.5m3.75-4.75v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vta0jbble {
  width: 18.5px;
  height: 11.5px;
  x: 2.75px;
  y: 6.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="vta0jbble"/><path class="ebrzzz9_q"/></g>`,
		"fallback": "iconoven:prompt",
	});
}

export default Component;

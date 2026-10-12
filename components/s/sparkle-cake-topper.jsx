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
		"content": `<style>.ahy77bcxx {
  width: 17px;
  height: 2.75px;
  x: 3.5px;
  y: 18.5px;
  rx: 1.25px;
}

.d6ffuvi-m {
  d: path("M4 6.25h2.5M5.25 5v2.5m12.25 5H20m-1.25-1.25v2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vdj7j6bzf {
  d: path("m12.14 3.32l1.1 2.46q.14.32.49.36l2.68.28q.35.03.09.27l-2.01 1.8q-.26.24-.18.58l.56 2.63q.07.35-.23.17l-2.34-1.35q-.3-.17-.6 0l-2.34 1.35q-.3.18-.23-.17l.56-2.63q.08-.34-.18-.58L7.5 6.69q-.26-.24.09-.27l2.68-.28q.35-.04.49-.36l1.1-2.46q.14-.32.28 0M12 13v5.5");
}
</style><g class="hntgybcog"><path class="vdj7j6bzf"/><rect class="ahy77bcxx"/><path class="d6ffuvi-m"/></g>`,
		"fallback": "iconoven:sparkle-cake-topper",
	});
}

export default Component;

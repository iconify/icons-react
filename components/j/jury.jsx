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
		"content": `<style>.c3-nxnbjd {
  d: path("M8.25 15.5v3.25m7.5-3.25v3.25");
}

.dng9h31fp {
  cx: 8.25px;
  cy: 5.25px;
  r: 2.5px;
}

.duuwzrlsj {
  d: path("M5 10.25h14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iegp0u62x {
  width: 18.5px;
  height: 8.25px;
  x: 2.75px;
  y: 13px;
  rx: 2px;
}

.xpr56mbyr {
  cx: 15.75px;
  cy: 5.25px;
  r: 2.5px;
}
</style><g class="hntgybcog"><circle class="dng9h31fp"/><circle class="xpr56mbyr"/><path class="duuwzrlsj"/><rect class="iegp0u62x"/><path class="c3-nxnbjd"/></g>`,
		"fallback": "iconoven:jury",
	});
}

export default Component;

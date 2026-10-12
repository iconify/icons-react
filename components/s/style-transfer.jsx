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
		"content": `<style>.bddp_mbkb {
  d: path("M6 6.25h.01m3.24-.5h.01m-2.76 4h.01M14.5 4.5h2.25a2.5 2.5 0 0 1 2.5 2.5v2.25m-1.75-1.5l1.75 1.75L21 7.75");
}

.d5sct5_ht {
  width: 8.5px;
  height: 8.5px;
  x: 12.75px;
  y: 12.75px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rt0lizbtg {
  cx: 7.75px;
  cy: 7.75px;
  r: 5px;
}
</style><g class="hntgybcog"><circle class="rt0lizbtg"/><path class="bddp_mbkb"/><rect class="d5sct5_ht"/></g>`,
		"fallback": "iconoven:style-transfer",
	});
}

export default Component;

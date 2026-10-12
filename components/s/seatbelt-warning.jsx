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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mgz3z1q0o {
  d: path("M14 16.75h2v1.5h-2Z");
}

.pq3nxynuv {
  d: path("M4.75 21.25V16A5.25 5.25 0 0 1 10 10.75h4A5.25 5.25 0 0 1 19.25 16v5.25Zm2.63-9.8l6.62 5.3");
}

.wv5f_1brg {
  cx: 12px;
  cy: 5.25px;
  r: 2.5px;
}
</style><g class="hntgybcog"><circle class="wv5f_1brg"/><path class="pq3nxynuv"/><path class="mgz3z1q0o"/></g>`,
		"fallback": "iconoven:seatbelt-warning",
	});
}

export default Component;

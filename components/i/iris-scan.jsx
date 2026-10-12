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
		"content": `<style>.t6ri8tf6l {
  cx: 12px;
  cy: 12px;
  r: 3px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.utjddmten {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7V4.25a1.5 1.5 0 0 1 1.5-1.5H7m10 0h2.75a1.5 1.5 0 0 1 1.5 1.5V7m0 10v2.75a1.5 1.5 0 0 1-1.5 1.5H17m-10 0H4.25a1.5 1.5 0 0 1-1.5-1.5V17");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yy3vhyb0w {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 12C6 8.5 8.75 6.5 12 6.5s6 2 7.75 5.5c-1.75 3.5-4.5 5.5-7.75 5.5s-6-2-7.75-5.5");
}
</style><g class="y9tr6bcfx"><path class="yy3vhyb0w"/><circle class="t6ri8tf6l"/><path class="to8m3ibcr"/><path class="utjddmten"/></g>`,
		"fallback": "iconoven:iris-scan",
	});
}

export default Component;

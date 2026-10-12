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
		"content": `<style>.ack3h6b1o {
  width: 16.5px;
  height: 13.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o69111nsa {
  d: path("m15.25 17l1.25 1.25l2.5-2.5");
}

.t1372hlxd {
  d: path("M6.5 8h8m-8 3.5H11");
}

.upu83lbfh {
  cx: 17px;
  cy: 17px;
  r: 4.25px;
}
</style><g class="hntgybcog"><rect class="ack3h6b1o"/><path class="t1372hlxd"/><circle class="upu83lbfh"/><path class="o69111nsa"/></g>`,
		"fallback": "iconoven:rsvp",
	});
}

export default Component;

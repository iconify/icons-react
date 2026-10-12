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

.im8lz_bbl {
  d: path("M6.5 2.75h11l2.25 2.5H4.25ZM5 5.25V17M19 5.25V17");
}

.jk8xifbqq {
  d: path("M8 17c0-1.6 1.8-2.5 4-2.5s4 .9 4 2.5Z");
}

.ukiulz-bh {
  width: 18.5px;
  height: 4.25px;
  x: 2.75px;
  y: 17px;
  rx: 1.5px;
}

.ytopibb5c {
  cx: 12px;
  cy: 10px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="im8lz_bbl"/><circle class="ytopibb5c"/><path class="jk8xifbqq"/><rect class="ukiulz-bh"/></g>`,
		"fallback": "iconoven:vendor",
	});
}

export default Component;

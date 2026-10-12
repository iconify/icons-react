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

.l2e-pnbhq {
  width: 5px;
  height: 5px;
  x: 16.25px;
  y: 4.75px;
  rx: 1.5px;
}

.rl3gbz0ih {
  width: 6.5px;
  height: 5px;
  x: 2.75px;
  y: 14.25px;
  rx: 1.5px;
}

.wc6025c8w {
  width: 11px;
  height: 5px;
  x: 2.75px;
  y: 4.75px;
  rx: 1.5px;
}

.wxla0klvc {
  width: 9.5px;
  height: 5px;
  x: 11.75px;
  y: 14.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="wc6025c8w"/><rect class="l2e-pnbhq"/><rect class="rl3gbz0ih"/><rect class="wxla0klvc"/></g>`,
		"fallback": "iconoven:percent-bar",
	});
}

export default Component;

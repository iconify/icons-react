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
		"content": `<style>.a429aqafh {
  cx: 4.75px;
  cy: 8.25px;
  r: 2px;
}

.c0_cdihkk {
  d: path("m8.93 12.71l-2.81-3M12 11.5V7m3.07 5.71l2.81-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qkzqambqp {
  cx: 19.25px;
  cy: 8.25px;
  r: 2px;
}

.v3g6xoxym {
  cx: 12px;
  cy: 16px;
  r: 3px;
}

.xe53owbmy {
  cx: 12px;
  cy: 5px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="v3g6xoxym"/><circle class="a429aqafh"/><circle class="xe53owbmy"/><circle class="qkzqambqp"/><path class="c0_cdihkk"/></g>`,
		"fallback": "iconoven:share-network",
	});
}

export default Component;

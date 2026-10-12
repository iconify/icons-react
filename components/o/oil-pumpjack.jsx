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
		"content": `<style>.d52r84jgn {
  d: path("M7.5 5H4.25a1.5 1.5 0 0 0-1.5 1.5v4a3 3 0 0 0 3 3H7.5Zm0 3l13 2.5m-10 10.75L13 9l2.5 12.25m3.75-11V14m-14.5-.5v7.75m-2 0h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qcb5jf56v {
  cx: 19.25px;
  cy: 16px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="d52r84jgn"/><circle class="qcb5jf56v"/></g>`,
		"fallback": "iconoven:oil-pumpjack",
	});
}

export default Component;

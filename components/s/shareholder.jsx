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
		"content": `<style>.aufabbv2i {
  d: path("M3.5 21.25h9a.75.75 0 0 0 .75-.75c0-3.62-2.42-6.25-5.25-6.25s-5.25 2.63-5.25 6.25a.75.75 0 0 0 .75.75M14 10.5l3-3l2 2L21.25 7M18.5 5.25h2.75V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l9kl1cbdj {
  cx: 8px;
  cy: 9px;
  r: 3px;
}
</style><g class="hntgybcog"><circle class="l9kl1cbdj"/><path class="aufabbv2i"/></g>`,
		"fallback": "iconoven:shareholder",
	});
}

export default Component;

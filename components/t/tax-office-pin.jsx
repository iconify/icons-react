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
		"content": `<style>.ru8f71bsq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 19c-4-3.5-7-6.5-7-10a7 7 0 0 1 14 0c0 3.5-3 6.5-7 10m-6 2.75h12M14.5 6.5l-5 5m0-4.5h.01m4.99 4h.01");
}
</style><path class="ru8f71bsq"/>`,
		"fallback": "uix:tax-office-pin",
	});
}

export default Component;

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
		"content": `<style>.bt7zxspdt {
  d: path("M2.5 9V7.5C2.5 5.5 7 4 12 4s9.5 1.5 9.5 3.5V9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7.5h-11V9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1m5.43 3.5h8.14a2.625 2.625 0 0 1 2.506 1.842l.859 2.75a2.625 2.625 0 0 1-2.506 3.408H7.071a2.625 2.625 0 0 1-2.506-3.408l.859-2.75A2.625 2.625 0 0 1 7.93 12.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uopp_bbmh {
  d: path("M10 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="bt7zxspdt"/><path class="uopp_bbmh"/></g>`,
		"fallback": "uix:phone-classic",
	});
}

export default Component;

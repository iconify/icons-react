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
		"content": `<style>.deg2yabsw {
  d: path("M5 6.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m8.5 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-10 15V18c0-3.5 2-5.5 4.5-5.5h8c2.5 0 4.5 2 4.5 5.5v3.5");
}

.gaokjcbjf {
  d: path("M3.5 17c3.5 0 8.5-1.5 12-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w2qsxelip {
  d: path("M20.5 17c-3.5 0-8.5-1.5-12-4.5");
}
</style><g class="hntgybcog"><path class="deg2yabsw"/><path class="gaokjcbjf"/><path class="w2qsxelip"/></g>`,
		"fallback": "uix:reunion",
	});
}

export default Component;

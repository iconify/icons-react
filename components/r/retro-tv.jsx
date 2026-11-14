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
		"content": `<style>.emuoz7beg {
  d: path("M9 10.5h2.5A3.5 3.5 0 0 1 15 14v.5a3.5 3.5 0 0 1-3.5 3.5H9a3.5 3.5 0 0 1-3.5-3.5V14A3.5 3.5 0 0 1 9 10.5m9.5 1h.01M18.5 15h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tlrdtbb-n {
  d: path("M6 7.5h12a3.5 3.5 0 0 1 3.5 3.5v6.5A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5V11A3.5 3.5 0 0 1 6 7.5m2.5-5l3.5 5l3.5-5");
}
</style><g class="hntgybcog"><path class="tlrdtbb-n"/><path class="emuoz7beg"/></g>`,
		"fallback": "uix:retro-tv",
	});
}

export default Component;

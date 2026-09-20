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
		"content": `<style>.dt84pfb_x {
  d: path("M14.5 16.5 17 19l-2.5 2.5");
}

.eyx95fmam {
  d: path("M4 16a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 7a5.5 5.5 0 0 1 4.5 9Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j_izzzyiq {
  d: path("M7 19h8");
}
</style><g class="hntgybcog"><path class="eyx95fmam"/><path class="j_izzzyiq"/><path class="dt84pfb_x"/></g>`,
		"fallback": "iconmind:weather-tomorrow-outline-thin",
	});
}

export default Component;

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
		"content": `<style>.g_eatebwd {
  d: path("M5 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jg5yyubai {
  d: path("M3 16c3 -2 6 2 9 0s6 2 9 0");
}

.neof5acyb {
  d: path("m14 10 4 -4");
}

.prj9u5frn {
  d: path("M9 10h5");
}
</style><g class="hntgybcog"><path class="g_eatebwd"/><path class="prj9u5frn"/><path class="neof5acyb"/><path class="jg5yyubai"/></g>`,
		"fallback": "iconmind:swimming-race-outline-thin",
	});
}

export default Component;

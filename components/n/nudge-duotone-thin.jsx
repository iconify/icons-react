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
		"content": `<style>.ds5w5aclo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16.32 7a5.5 5.5 0 1 1 -4.64 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e0ead5bmw {
  d: path("M3 12h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pf-zwj5ei {
  d: path("m6 10 2 2 -2 2");
}

.s1qqp0jlo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m6 10 2 2 -2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u2cwo8b6g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 12h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v-m1aobza {
  d: path("M16.32 7a5.5 5.5 0 1 1 -4.64 0");
}
</style><g class="hntgybcog"><path class="ds5w5aclo"/><path class="u2cwo8b6g"/><path class="s1qqp0jlo"/><path class="v-m1aobza"/><path class="e0ead5bmw"/><path class="pf-zwj5ei"/></g>`,
		"fallback": "iconmind:nudge-duotone-thin",
	});
}

export default Component;

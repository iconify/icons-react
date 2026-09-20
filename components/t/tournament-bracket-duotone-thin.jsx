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
		"content": `<style>.cht9k-bwf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 19h6v-7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cwz65fbys {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fj15k1bhb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 5h6v7h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l3ca9u8kt {
  d: path("M17 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nuz6-76is {
  d: path("M15 12h6");
}

.qno8l4b9z {
  d: path("M3 19h6v-7");
}

.rdhgnbc4d {
  d: path("M3 5h6v7h6");
}

.rxwr8htky {
  fill: currentColor;
  d: path("M17 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="rxwr8htky"/><path class="fj15k1bhb"/><path class="cht9k-bwf"/><path class="cwz65fbys"/><path class="rdhgnbc4d"/><path class="qno8l4b9z"/><path class="nuz6-76is"/><path class="l3ca9u8kt"/></g>`,
		"fallback": "iconmind:tournament-bracket-duotone-thin",
	});
}

export default Component;

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
		"content": `<style>.eu9kkgbdm {
  d: path("M9 12h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m27ljac1c {
  d: path("m18 9 3 3 -3 3");
}

.rno54ybbk {
  d: path("M3 7h6v10H3Z");
}

.u8h66mbjf {
  fill: currentColor;
  d: path("M3 7h6v10H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="u8h66mbjf"/><path class="rno54ybbk"/><path class="eu9kkgbdm"/><path class="m27ljac1c"/></g>`,
		"fallback": "iconmind:laser-duotone-thin",
	});
}

export default Component;

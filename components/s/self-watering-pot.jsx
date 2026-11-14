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
		"content": `<style>.ezycmucuv {
  d: path("M8.5 18q1.75-.75 3.5 0t3.5 0M12 7V5m0 0c0-1.5-1.25-2.5-3-2.5M12 5c0-1.5 1.25-2.5 3-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uogeoub3v {
  d: path("M3.5 7h17l-2 7.5h-13Zm2 7.5V20A1.5 1.5 0 0 0 7 21.5h10a1.5 1.5 0 0 0 1.5-1.5v-5.5");
}
</style><g class="hntgybcog"><path class="uogeoub3v"/><path class="ezycmucuv"/></g>`,
		"fallback": "uix:self-watering-pot",
	});
}

export default Component;

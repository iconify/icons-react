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
		"content": `<style>.gdju1xbel {
  d: path("M3 13c0 -9 18 -9 18 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.niggb1byh {
  d: path("M8 10h8v4H8Z");
}

.r9vsub3-y {
  fill: currentColor;
  d: path("M8 10h8v4H8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wzhctub5z {
  d: path("M3 11c0 9 18 9 18 0");
}
</style><g class="hntgybcog"><path class="r9vsub3-y"/><path class="niggb1byh"/><path class="gdju1xbel"/><path class="wzhctub5z"/></g>`,
		"fallback": "iconmind:magnetic-field-duotone-thin",
	});
}

export default Component;

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
		"content": `<style>.c8bsosbbf {
  fill: currentColor;
  d: path("M9 7h3l3 3 -3 3H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.crv4i00bu {
  d: path("M4 3v18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lulmb9b1a {
  d: path("M4 4h16v12H4");
}

.wl7bxfbmv {
  d: path("M9 7h3l3 3 -3 3H9Z");
}
</style><g class="hntgybcog"><path class="c8bsosbbf"/><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="wl7bxfbmv"/></g>`,
		"fallback": "iconmind:labelled-checkpoint-duotone-thin",
	});
}

export default Component;

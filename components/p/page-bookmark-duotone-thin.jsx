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
		"content": `<style>.bfxqopr2s {
  fill: currentColor;
  d: path("M7 3h10v18l-5 -5 -5 5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kfp8u8bco {
  d: path("M7 3h10v18l-5 -5 -5 5Z");
}
</style><g class="hntgybcog"><path class="bfxqopr2s"/><path class="kfp8u8bco"/></g>`,
		"fallback": "iconmind:page-bookmark-duotone-thin",
	});
}

export default Component;

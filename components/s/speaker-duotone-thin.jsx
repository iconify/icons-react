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
		"content": `<style>.hntep9b9h {
  d: path("M8 15a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ph-bhccoq {
  d: path("M10 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.tkn_9lu9q {
  d: path("M5 4a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.vyofulbkr {
  fill: currentColor;
  d: path("M8 15a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xbdnj9ayw {
  fill: currentColor;
  d: path("M10 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yn64c1dsb {
  fill: currentColor;
  d: path("M5 4a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="yn64c1dsb"/><path class="vyofulbkr"/><path class="xbdnj9ayw"/><path class="tkn_9lu9q"/><path class="hntep9b9h"/><path class="ph-bhccoq"/></g>`,
		"fallback": "iconmind:speaker-duotone-thin",
	});
}

export default Component;

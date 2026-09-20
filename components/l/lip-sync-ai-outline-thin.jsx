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
		"content": `<style>.dwqtbeylw {
  d: path("M6 11h6");
}

.fp0jerb6p {
  d: path("M10.5 6H13a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n2txk9b4m {
  d: path("M12 11a3 3 0 0 1 -6 0");
}

.tqfrzx00u {
  d: path("m19 10 3 -3v10l-3 -3Z");
}
</style><g class="hntgybcog"><path class="fp0jerb6p"/><path class="tqfrzx00u"/><path class="dwqtbeylw"/><path class="n2txk9b4m"/></g>`,
		"fallback": "iconmind:lip-sync-ai-outline-thin",
	});
}

export default Component;

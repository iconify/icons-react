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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.dfcdzc65k {
  d: path("M3 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kdmnrabtq {
  d: path("M17 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.orctd05jx {
  d: path("m7.5 7.5 2 2");
}

.rija-f-oa {
  d: path("m14.5 14.5 2 2");
}
</style><g class="hntgybcog"><path class="dfcdzc65k"/><path class="orctd05jx"/><path class="bo51iypxr"/><path class="rija-f-oa"/><path class="kdmnrabtq"/></g>`,
		"fallback": "iconmind:sequence-outline-thin",
	});
}

export default Component;

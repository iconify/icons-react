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
		"content": `<style>.aabrznh9u {
  d: path("M10.5 14H14");
}

.c8tpvpbrt {
  d: path("M7 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jagbzbbou {
  d: path("M10.5 10H17");
}

.n09nomjwg {
  d: path("M15 6h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h3");
}

.ux6apgnet {
  d: path("M7 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="n09nomjwg"/><path class="ux6apgnet"/><path class="jagbzbbou"/><path class="c8tpvpbrt"/><path class="aabrznh9u"/></g>`,
		"fallback": "iconmind:status-page-outline-thin",
	});
}

export default Component;

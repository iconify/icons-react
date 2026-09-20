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
		"content": `<style>.asewlgb2k {
  d: path("M6 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.b1gzncccy {
  fill: currentColor;
  d: path("M13 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
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

.i_533lmja {
  fill: currentColor;
  d: path("M6 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.j3qn0qbmb {
  fill: currentColor;
  d: path("M10 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.k8_np0a0y {
  d: path("M17 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.l7ynjsgwx {
  fill: currentColor;
  d: path("M18 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lu0ovacdk {
  d: path("M4 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.n_po3-i3k {
  fill: currentColor;
  d: path("M17 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qpa6yacba {
  d: path("M10 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s4ceatb9m {
  d: path("M13 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.tr__z6b9j {
  d: path("M18 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.v2lh6q7fz {
  fill: currentColor;
  d: path("M4 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="v2lh6q7fz"/><path class="j3qn0qbmb"/><path class="n_po3-i3k"/><path class="i_533lmja"/><path class="b1gzncccy"/><path class="l7ynjsgwx"/><path class="lu0ovacdk"/><path class="qpa6yacba"/><path class="k8_np0a0y"/><path class="asewlgb2k"/><path class="s4ceatb9m"/><path class="tr__z6b9j"/></g>`,
		"fallback": "iconmind:noise-duotone-thin",
	});
}

export default Component;

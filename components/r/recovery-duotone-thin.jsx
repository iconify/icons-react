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
		"content": `<style>.b4voibysq {
  fill: currentColor;
  d: path("M3 13a3 3 0 0 1 6 0 3 3 0 0 1 6 0l-6 6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.d0oey7bgo {
  d: path("m14 11 3 -3 3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l3qcduxbl {
  d: path("M3 13a3 3 0 0 1 6 0 3 3 0 0 1 6 0l-6 6Z");
}

.lfe90yj9e {
  d: path("M17 20V8");
}
</style><g class="hntgybcog"><path class="b4voibysq"/><path class="l3qcduxbl"/><path class="lfe90yj9e"/><path class="d0oey7bgo"/></g>`,
		"fallback": "iconmind:recovery-duotone-thin",
	});
}

export default Component;

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
		"content": `<style>.a62njb70e {
  d: path("M15 6v12");
}

.b58isb55w {
  d: path("M12 6v7");
}

.d2gpzsh-s {
  d: path("M9 6v12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lo0rkwbmg {
  d: path("M18 6v7");
}

.nnzlfsekh {
  d: path("M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.r0-aom3qb {
  fill: currentColor;
  d: path("M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wp0aeb9st {
  d: path("M6 6v7");
}
</style><g class="hntgybcog"><path class="r0-aom3qb"/><path class="nnzlfsekh"/><path class="d2gpzsh-s"/><path class="a62njb70e"/><path class="wp0aeb9st"/><path class="b58isb55w"/><path class="lo0rkwbmg"/></g>`,
		"fallback": "iconmind:piano-duotone-thin",
	});
}

export default Component;

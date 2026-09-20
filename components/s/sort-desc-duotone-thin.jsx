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
		"content": `<style>.b7h8iyqlm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 6h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.di-mwobgn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 12h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jv75tobai {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 18h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k4qo1xe9v {
  d: path("M4 6h16");
}

.vybq366mg {
  d: path("M4 18h6");
}

.xlekzhbnl {
  d: path("M4 12h11");
}
</style><g class="hntgybcog"><path class="b7h8iyqlm"/><path class="di-mwobgn"/><path class="jv75tobai"/><path class="k4qo1xe9v"/><path class="xlekzhbnl"/><path class="vybq366mg"/></g>`,
		"fallback": "iconmind:sort-desc-duotone-thin",
	});
}

export default Component;

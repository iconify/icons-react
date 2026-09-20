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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mpxubccrr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M11.32 7a5.5 5.5 0 1 1 -4.64 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mzs9lvbbs {
  d: path("M19.5 4v16");
}

.o35gkxngb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19.5 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pf60eubcf {
  d: path("M11.32 7a5.5 5.5 0 1 1 -4.64 0");
}
</style><g class="hntgybcog"><path class="mpxubccrr"/><path class="o35gkxngb"/><path class="pf60eubcf"/><path class="mzs9lvbbs"/></g>`,
		"fallback": "iconmind:stuck-agent-duotone-thin",
	});
}

export default Component;

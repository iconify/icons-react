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
		"content": `<style>.ay3lmyx_t {
  fill: currentColor;
  d: path("M2 12a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
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

.s3ky5ibnb {
  d: path("M15 4h5v5");
}

.sp921pbky {
  d: path("M2 12a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.uz3lsgu5b {
  d: path("m14 10 6 -6");
}
</style><g class="hntgybcog"><path class="ay3lmyx_t"/><path class="sp921pbky"/><path class="uz3lsgu5b"/><path class="s3ky5ibnb"/></g>`,
		"fallback": "iconmind:upscale-duotone-thin",
	});
}

export default Component;

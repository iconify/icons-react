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
		"content": `<style>.bztdq0bdr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m8 8 4 -4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h3z-uye4u {
  d: path("m8 8 4 -4 4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mnwr0qhch {
  d: path("M12 4v17");
}

.s0c0pubvh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 4v17");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="s0c0pubvh"/><path class="bztdq0bdr"/><path class="mnwr0qhch"/><path class="h3z-uye4u"/></g>`,
		"fallback": "iconmind:straight-ahead-duotone-thin",
	});
}

export default Component;

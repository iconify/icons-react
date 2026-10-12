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

.n475r60ru {
  d: path("M12 2.75c1.5 1 2.25 2.75 2.25 4.75V11c0 1.25-1 2.25-2.25 2.25s-2.25-1-2.25-2.25V7.5c0-2 .75-3.75 2.25-4.75");
}

.uss5p5bfd {
  d: path("M9.75 8.25L12 9.75l2.25-1.5m-2.25 5v8m0-2.5c-1.5-.5-3-2-3.5-3.75m3.5 2.25c1.5-.5 2.75-1.75 3.25-3.25");
}
</style><g class="hntgybcog"><path class="n475r60ru"/><path class="uss5p5bfd"/></g>`,
		"fallback": "iconoven:lavender",
	});
}

export default Component;

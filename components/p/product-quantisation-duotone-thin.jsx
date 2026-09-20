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
		"content": `<style>.b5ic9acln {
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
}

.gtlfk7rgu {
  fill: currentColor;
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
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

.te8a_jbtf {
  d: path("M10.5 10v6");
}

.xcf6_7bxs {
  d: path("M13.5 10v6");
}
</style><g class="hntgybcog"><path class="gtlfk7rgu"/><path class="b5ic9acln"/><path class="te8a_jbtf"/><path class="xcf6_7bxs"/></g>`,
		"fallback": "iconmind:product-quantisation-duotone-thin",
	});
}

export default Component;

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

.e6bo0sbhg {
  d: path("M8.5 14.5 11 12l2.5 2.5L16 12");
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
</style><g class="hntgybcog"><path class="gtlfk7rgu"/><path class="b5ic9acln"/><path class="e6bo0sbhg"/></g>`,
		"fallback": "iconmind:splade-duotone-thin",
	});
}

export default Component;

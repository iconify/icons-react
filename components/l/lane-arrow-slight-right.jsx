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

.va7z2nkam {
  d: path("M10.5 2.5h6v6");
}

.y7myatbod {
  d: path("M8 21.5V13q0-2 2-4l6.5-6.5");
}
</style><g class="hntgybcog"><path class="y7myatbod"/><path class="va7z2nkam"/></g>`,
		"fallback": "uix:lane-arrow-slight-right",
	});
}

export default Component;

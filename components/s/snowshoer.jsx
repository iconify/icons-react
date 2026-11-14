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

.tcgfiebqs {
  d: path("M3 19.75a3.75 1.75 0 1 0 7.5 0a3.75 1.75 0 1 0-7.5 0m10.5 0a3.75 1.75 0 1 0 7.5 0a3.75 1.75 0 1 0-7.5 0");
}

.ycofiobbx {
  d: path("M9.75 4.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M6.75 18L12 12.5l5.25 5.5M12 12.5v-6M8 12l4-2.75L16 12");
}
</style><g class="hntgybcog"><path class="ycofiobbx"/><path class="tcgfiebqs"/></g>`,
		"fallback": "uix:snowshoer",
	});
}

export default Component;

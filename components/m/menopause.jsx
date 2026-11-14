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
		"content": `<style>.hgjirkb5w {
  d: path("M2.807 12.787a12 12 0 0 1 18.386 0M12 20.5l-9.25-7.75M12 20.5l9.25-7.75M12 20.5l-5-11m5 11v-12m0 12l5-11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4gn3kdto {
  fill: currentColor;
  d: path("M11 20.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><g class="hntgybcog"><path class="hgjirkb5w"/><path class="y4gn3kdto"/></g>`,
		"fallback": "uix:menopause",
	});
}

export default Component;

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

.ji5x73lug {
  d: path("M16.25 18.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.jwcm_oyjt {
  fill: currentColor;
  d: path("M3 3h6v4H3Zm6 4h6v4H9Z");
}

.qw_b5zhqa {
  d: path("M16.125 15h3.25A2.625 2.625 0 0 1 22 17.625v1.25a2.625 2.625 0 0 1-2.625 2.625h-3.25a2.625 2.625 0 0 1-2.625-2.625v-1.25A2.625 2.625 0 0 1 16.125 15m.125 0v-1.25h3V15");
}

.y8y12ibok {
  d: path("M3 21.5V3h12v8H3");
}
</style><g class="hntgybcog"><path class="y8y12ibok"/><path class="jwcm_oyjt"/><path class="qw_b5zhqa"/><path class="ji5x73lug"/></g>`,
		"fallback": "uix:photo-finish",
	});
}

export default Component;

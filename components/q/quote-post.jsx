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

.hs56eykib {
  d: path("M16 10c0 1.75-1 2.75-2.5 3.25");
}

.od4rfdimj {
  d: path("M10.25 10c0 1.75-1 2.75-2.5 3.25");
}

.wxoo7k3or {
  d: path("M4 6a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 6v8a2.5 2.5 0 0 1-2.5 2.5H11L7 20v-3.5h-.5A2.5 2.5 0 0 1 4 14Z");
}

.ya0kezbcm {
  fill: currentColor;
  d: path("M14.625 7.5zA1.375 1.375 0 0 1 16 8.875a1.375 1.375 0 0 1-1.375 1.375a1.375 1.375 0 0 1-1.375-1.375A1.375 1.375 0 0 1 14.625 7.5");
}

.yj3ta0bjm {
  fill: currentColor;
  d: path("M8.875 7.5za1.375 1.375 0 0 1 1.375 1.375a1.375 1.375 0 0 1-1.375 1.375A1.375 1.375 0 0 1 7.5 8.875A1.375 1.375 0 0 1 8.875 7.5");
}
</style><g class="hntgybcog"><path class="wxoo7k3or"/><path class="yj3ta0bjm"/><path class="od4rfdimj"/><path class="ya0kezbcm"/><path class="hs56eykib"/></g>`,
		"fallback": "uix:quote-post",
	});
}

export default Component;

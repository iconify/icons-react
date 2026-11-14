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

.uf0ine87u {
  d: path("M12 9V2.5M12 15v6.5M9 12H2.5M15 12h6.5M14 10l3-3m-3 7l3 3m-7-3l-3 3m3-7L7 7");
}

.vokddgb3s {
  fill: currentColor;
  d: path("M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><g class="hntgybcog"><path class="uf0ine87u"/><path class="vokddgb3s"/></g>`,
		"fallback": "uix:sharp-pain",
	});
}

export default Component;

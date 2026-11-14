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
		"content": `<style>.c84mi2aph {
  d: path("M5.5 12q1.5-3.75 3 0t3 0t3 0t3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k9shtzb5g {
  d: path("M2.5 12a9.5 6 0 1 0 19 0a9.5 6 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="k9shtzb5g"/><path class="c84mi2aph"/></g>`,
		"fallback": "uix:string-theory",
	});
}

export default Component;

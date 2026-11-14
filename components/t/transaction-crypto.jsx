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
		"content": `<style>.an639snmo {
  d: path("M2 12a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m8tundb3w {
  d: path("M10.5 3.5h3a8.5 8.5 0 0 1 0 17h-3m-4-11h8");
}

.ya6zribcw {
  d: path("m12.5 7.5l2 2l-2 2m2 3h-8m2-2l-2 2l2 2");
}
</style><g class="hntgybcog"><path class="an639snmo"/><path class="m8tundb3w"/><path class="ya6zribcw"/></g>`,
		"fallback": "uix:transaction-crypto",
	});
}

export default Component;

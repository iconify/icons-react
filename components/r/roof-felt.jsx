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
		"content": `<style>.ehcngrjeu {
  d: path("M4 5v14a5 2.5 0 0 0 10 0V5m0 1.5c4.5 0 6.5 2.5 6.5 6.5v8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.plq4xqbqf {
  d: path("M4 5a5 2.5 0 1 0 10 0A5 2.5 0 1 0 4 5");
}
</style><g class="hntgybcog"><path class="plq4xqbqf"/><path class="ehcngrjeu"/></g>`,
		"fallback": "uix:roof-felt",
	});
}

export default Component;

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

.vkdgtnbat {
  d: path("M10.75 21.5V18h2.5v3.5");
}

.zwd3fq8vx {
  d: path("m6.929 10.068l3.371-4.25a1.5 1.5 0 0 1 1.175-.568h1.05a1.5 1.5 0 0 1 1.175.568l3.371 4.25a1.5 1.5 0 0 1-1.175 2.432H8.104a1.5 1.5 0 0 1-1.175-2.432M10.75 5.25V2.5H13L15 4m-8 8.5v9h10v-9");
}
</style><g class="hntgybcog"><path class="zwd3fq8vx"/><path class="vkdgtnbat"/></g>`,
		"fallback": "uix:oast-house",
	});
}

export default Component;

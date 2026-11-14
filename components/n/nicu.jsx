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
		"content": `<style>.b4kzbjlll {
  d: path("M11.527 18.656c-.595.232-1.277.344-2.027.344C7 19 5.25 17.75 5 15l-.5-7c0-3 1.75-5.5 5-5.5s5 2.5 5 5.5l-.446 6.241");
}

.f7qtdnb0d {
  d: path("M7.25 7.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M5 12.75c2.5 1 6 .25 9-1.75m.25 7h1l1.25-2.5l1.75 5l1.5-2.5h2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b4kzbjlll"/><path class="f7qtdnb0d"/></g>`,
		"fallback": "uix:nicu",
	});
}

export default Component;

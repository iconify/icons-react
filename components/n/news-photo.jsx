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

.q8vxtrqnp {
  d: path("M8.75 5.5h6.5A1.75 1.75 0 0 1 17 7.25v5A1.75 1.75 0 0 1 15.25 14h-6.5A1.75 1.75 0 0 1 7 12.25v-5A1.75 1.75 0 0 1 8.75 5.5");
}

.uh1ab-bsl {
  d: path("M7.5 2.5h9A3.5 3.5 0 0 1 20 6v12a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 18V6a3.5 3.5 0 0 1 3.5-3.5");
}

.x7xqwibku {
  d: path("M9.5 14v-3.5l2.5-2l2.5 2V14M7 17.5h10");
}
</style><g class="hntgybcog"><path class="uh1ab-bsl"/><path class="q8vxtrqnp"/><path class="x7xqwibku"/></g>`,
		"fallback": "uix:news-photo",
	});
}

export default Component;

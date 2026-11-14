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

.n9ktarb6v {
  d: path("M5.5 3H14a1.5 3 0 0 1 0 6H5.5");
}

.zwgcdcbia {
  d: path("M4 6a1.5 3 0 1 0 3 0a1.5 3 0 1 0-3 0m11.5 0l6-3.5M6.625 12h10.75A2.625 2.625 0 0 1 20 14.625v4.25a2.625 2.625 0 0 1-2.625 2.625H6.625A2.625 2.625 0 0 1 4 18.875v-4.25A2.625 2.625 0 0 1 6.625 12m.875 3.5h9m-9 3H13");
}
</style><g class="hntgybcog"><path class="n9ktarb6v"/><path class="zwgcdcbia"/></g>`,
		"fallback": "uix:press-roller",
	});
}

export default Component;

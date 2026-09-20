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

.w6ckh2b8k {
  d: path("m10.5 6 3 3 -3 3Z");
}

.wv6md6qod {
  d: path("M15 3h3v18l-6 -6 -6 6V3h3");
}
</style><g class="hntgybcog"><path class="wv6md6qod"/><path class="w6ckh2b8k"/></g>`,
		"fallback": "iconmind:saved-run-outline-thin",
	});
}

export default Component;

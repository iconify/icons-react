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
		"content": `<style>.eqo094blp {
  d: path("M7.75 4h8.5a5.25 5.25 0 0 1 5.25 5.25v5.5A5.25 5.25 0 0 1 16.25 20h-8.5a5.25 5.25 0 0 1-5.25-5.25v-5.5A5.25 5.25 0 0 1 7.75 4M12 4v3.5m0 9V20m-4-8h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k5om1hbaz {
  d: path("m10 10l-2 2l2 2m4-4l2 2l-2 2");
}
</style><g class="hntgybcog"><path class="eqo094blp"/><path class="k5om1hbaz"/></g>`,
		"fallback": "uix:split-pane-resize",
	});
}

export default Component;

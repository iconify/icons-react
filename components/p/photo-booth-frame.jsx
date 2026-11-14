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

.x24jg10ci {
  d: path("M10 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-2.5 8.5c0-2.75 2-3.75 4.5-3.75s4.5 1 4.5 3.75");
}

.yukrl4bhq {
  d: path("M7.5 2.5h9A3.5 3.5 0 0 1 20 6v7a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 13V6a3.5 3.5 0 0 1 3.5-3.5m3 14v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4");
}
</style><g class="hntgybcog"><path class="yukrl4bhq"/><path class="x24jg10ci"/></g>`,
		"fallback": "uix:photo-booth-frame",
	});
}

export default Component;

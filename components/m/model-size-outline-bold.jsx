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
		"content": `<style>.i3nsbzblu {
  d: path("m10 3 7 7 -7 7 -7 -7Z");
}

.rg7tj2b_x {
  d: path("m18 14 3.5 3.5L18 21l-3.5 -3.5Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="i3nsbzblu"/><path class="rg7tj2b_x"/></g>`,
		"fallback": "iconmind:model-size-outline-bold",
	});
}

export default Component;

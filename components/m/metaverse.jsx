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
		"content": `<style>.dkz8efs6m {
  d: path("M6.5 6.5h11A2.5 2.5 0 0 1 20 9v6a2.5 2.5 0 0 1-2.5 2.5h-2l-2.5-2h-2l-2.5 2h-2A2.5 2.5 0 0 1 4 15V9a2.5 2.5 0 0 1 2.5-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lm66vpdvk {
  d: path("M6.75 11.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M4 9.5H2.5v5H4m16-5h1.5v5H20");
}
</style><g class="hntgybcog"><path class="dkz8efs6m"/><path class="lm66vpdvk"/></g>`,
		"fallback": "uix:metaverse",
	});
}

export default Component;

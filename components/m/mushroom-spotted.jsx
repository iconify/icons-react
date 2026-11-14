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
		"content": `<style>.aa0eed8vo {
  d: path("M2.5 13C2.5 7 6.75 3 12 3s9.5 4 9.5 10Zm6.25 0v6.5a1.5 1.5 0 0 0 1.5 1.5h3.5a1.5 1.5 0 0 0 1.5-1.5V13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tsx6hu9vg {
  fill: currentColor;
  d: path("M6.5 8.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m8 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="aa0eed8vo"/><path class="tsx6hu9vg"/></g>`,
		"fallback": "uix:mushroom-spotted",
	});
}

export default Component;

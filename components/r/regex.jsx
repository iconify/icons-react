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
		"content": `<style>.c6ooj5b2j {
  d: path("M4.75 4.75h-1.5v14.5h1.5m14.5-14.5h1.5v14.5h-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hqdmvkbdc {
  d: path("M14.25 6.75v7.5M11 8.63l6.5 3.75m-6.5 0l6.5-3.75");
}

.mmu7nww0a {
  cx: 8px;
  cy: 16px;
  r: 1.25px;
}
</style><g class="hntgybcog"><path class="c6ooj5b2j"/><circle class="mmu7nww0a"/><path class="hqdmvkbdc"/></g>`,
		"fallback": "iconoven:regex",
	});
}

export default Component;

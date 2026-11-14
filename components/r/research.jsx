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

.nzq9s7bqa {
  d: path("M15.25 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75L21 21");
}

.uzhpe7eau {
  d: path("M21 13.86V4.5c-3-.5-6.5 0-9 1.5c-2.5-1.5-6-2-9-1.5V18c3-.5 6.5 0 9 1.5a10 10 0 0 1 .673-.368M12 6v13.5");
}
</style><g class="hntgybcog"><path class="uzhpe7eau"/><path class="nzq9s7bqa"/></g>`,
		"fallback": "uix:research",
	});
}

export default Component;

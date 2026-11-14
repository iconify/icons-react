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
		"content": `<style>.fv5pcnpmp {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pc88xhzvh {
  d: path("m12.873 3.003l6.5 3.742a1.75 1.75 0 0 1 .877 1.517v7.476a1.75 1.75 0 0 1-.877 1.517l-6.5 3.742a1.75 1.75 0 0 1-1.746 0l-6.5-3.742a1.75 1.75 0 0 1-.877-1.517V8.262a1.75 1.75 0 0 1 .877-1.517l6.5-3.742a1.75 1.75 0 0 1 1.746 0M3.75 7.25l6.5 3.75m10-3.75L13.75 11M12 14v7.5");
}
</style><g class="hntgybcog"><path class="pc88xhzvh"/><path class="fv5pcnpmp"/></g>`,
		"fallback": "uix:model",
	});
}

export default Component;

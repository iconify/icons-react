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
		"content": `<style>.c0yewh3tu {
  cx: 4px;
  cy: 20px;
  r: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o5h3r9bvc {
  d: path("m10.59 11.65l6.91-6.91q.35-.35.82-.53l1.96-.78q.47-.18.29.29l-.78 1.96q-.18.47-.53.82l-6.91 6.91q-.35.35-.7 0l-1.06-1.06q-.35-.35 0-.7m-4.34.6l5.5 5.5m-3.5-2l-3 3");
}
</style><g class="hntgybcog"><path class="o5h3r9bvc"/><circle class="c0yewh3tu"/></g>`,
		"fallback": "iconoven:sword",
	});
}

export default Component;

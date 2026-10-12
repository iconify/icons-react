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

.of4kfwcob {
  d: path("M2.75 6.25a2.5 2.5 0 0 1 2.5-2.5h13.5a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5H12.5L8 20.85a.77.77 0 0 1-1.25-.6v-2.5h-1.5a2.5 2.5 0 0 1-2.5-2.5Z");
}

.qvdsf1bqy {
  d: path("M13.75 9v2.25a1.25 1.25 0 0 0 2.5 0v-.5a4.25 4.25 0 1 0-1.75 3.45");
}

.yvz9c8brq {
  cx: 12px;
  cy: 10.75px;
  r: 1.75px;
}
</style><g class="hntgybcog"><path class="of4kfwcob"/><circle class="yvz9c8brq"/><path class="qvdsf1bqy"/></g>`,
		"fallback": "iconoven:mention-at",
	});
}

export default Component;

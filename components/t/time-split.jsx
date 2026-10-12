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
		"content": `<style>.g8wdkzbot {
  d: path("M12 6.5a5.5 5.5 0 0 1 0 11Zm0 5.5H8.25M12 12L9.5 8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hwsal5q-o {
  cx: 12px;
  cy: 12px;
  r: 8px;
}
</style><g class="hntgybcog"><circle class="hwsal5q-o"/><path class="g8wdkzbot"/></g>`,
		"fallback": "iconoven:time-split",
	});
}

export default Component;

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
		"content": `<style>.eku8v4b5a {
  d: path("M3 9a9 4 0 1 0 18 0A9 4 0 1 0 3 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iijdzgbrx {
  d: path("M3 9v5.5a9 4 0 0 0 18 0V9");
}
</style><g class="hntgybcog"><path class="eku8v4b5a"/><path class="iijdzgbrx"/></g>`,
		"fallback": "uix:puck",
	});
}

export default Component;

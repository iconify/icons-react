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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.slj2oov7b {
  d: path("M12 5.25a6.75 6.75 0 0 1 0 13.5M8.75 9h6.5M12 9v6.75");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="slj2oov7b"/></g>`,
		"fallback": "iconoven:token-coin",
	});
}

export default Component;

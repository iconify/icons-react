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

.u47typb1n {
  d: path("M12 6.5A5.5 5.5 0 1 1 6.5 12H12Z");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="u47typb1n"/></g>`,
		"fallback": "iconoven:progress-circle",
	});
}

export default Component;

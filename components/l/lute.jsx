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
		"content": `<style>.dfom1ccsl {
  cx: 9px;
  cy: 13.5px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s--eem49q {
  d: path("M4.4 18.1a6.5 5-45 1 0 9.2-9.2a6.5 5-45 1 0-9.2 9.2m9.2-9.2L18 4.5m0 0l3 3");
}
</style><g class="hntgybcog"><path class="s--eem49q"/><circle class="dfom1ccsl"/></g>`,
		"fallback": "iconoven:lute",
	});
}

export default Component;

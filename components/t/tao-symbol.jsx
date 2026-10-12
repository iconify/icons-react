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
		"content": `<style>.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.cw9zrpbtb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7.38h.01M12 16.63h.01");
}

.pmqh0lbst {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75a9.25 9.25 0 0 0 0 18.5c-2-3.46-4.65-7.4 0-9.25s2-5.79 0-9.25");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="c6vt1lbds"/><path class="pmqh0lbst"/><path class="cw9zrpbtb"/></g>`,
		"fallback": "iconoven:tao-symbol",
	});
}

export default Component;

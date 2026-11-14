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
		"content": `<style>.gd09gc80b {
  d: path("M2.5 21h11l6.5-4.5a1.75 1.75 0 0 0-2.25-2.75L14.5 16M11.353 4.085l1.294 4.83");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vcfdmtb0p {
  d: path("m8.938 4.732l4.83-1.294a2.5 2.5 0 0 1 3.062 1.768a2.5 2.5 0 0 1-1.768 3.062l-4.83 1.294A2.5 2.5 0 0 1 7.17 7.794a2.5 2.5 0 0 1 1.768-3.062M2.5 13.5h7a2.25 2.25 0 0 1 0 4.5h-3");
}
</style><g class="hntgybcog"><path class="vcfdmtb0p"/><path class="gd09gc80b"/></g>`,
		"fallback": "uix:pill-hand",
	});
}

export default Component;

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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mj_6ev9oe {
  d: path("M20 20L22 22");
}

.r0xhknb7f {
  cx: 11.5px;
  cy: 11.5px;
  r: 9.5px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.xtutonbhb {
  d: path("M9 11.5H11.5M11.5 11.5H14M11.5 11.5V14M11.5 11.5V9");
}
</style><g class="ipq1z-bjh"><circle class="r0xhknb7f"/><path class="xtutonbhb"/><path class="mj_6ev9oe"/></g>`,
		"fallback": "solar:minimalistic-magnifier-zoom-in-line-duotone",
	});
}

export default Component;

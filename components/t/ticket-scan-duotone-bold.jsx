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
		"content": `<style>.ee7dg944u {
  d: path("M3 8h18v3l-2 2 2 2v3H3v-3l2 -2 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sy-b8bbxx {
  fill: currentColor;
  d: path("M3 8h18v3l-2 2 2 2v3H3v-3l2 -2 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zugrvnb7t {
  d: path("M2 13h20");
}
</style><g class="s0phu2bbs"><path class="sy-b8bbxx"/><path class="ee7dg944u"/><path class="zugrvnb7t"/></g>`,
		"fallback": "iconmind:ticket-scan-duotone-bold",
	});
}

export default Component;

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
		"content": `<style>.iy0zj-beq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 21v-4c-2 -2 -3 -5 -3 -8a7 7 0 0 1 14 -1c0 2 2 3 2 4s-1 1 -2 1v3a2 2 0 0 1 -2 2h-3v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p-b4m-b3j {
  d: path("M12 5 8 9h3l-4 4");
}

.pdx7buv0t {
  d: path("M6 21v-4c-2 -2 -3 -5 -3 -8a7 7 0 0 1 14 -1c0 2 2 3 2 4s-1 1 -2 1v3a2 2 0 0 1 -2 2h-3v3");
}

.qm2b6lb8k {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 5 8 9h3l-4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="iy0zj-beq"/><path class="qm2b6lb8k"/><path class="pdx7buv0t"/><path class="p-b4m-b3j"/></g>`,
		"fallback": "iconmind:stress-duotone-bold",
	});
}

export default Component;

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
		"content": `<style>.he-6-nbhf {
  d: path("M14 3v6l6 6v6");
}

.l5m5cz8qo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 3v6l6 6v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.na0verb6w {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14 3v6l6 6v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nq6698b_y {
  d: path("M4 3v6l6 6v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="l5m5cz8qo"/><path class="na0verb6w"/><path class="nq6698b_y"/><path class="he-6-nbhf"/></g>`,
		"fallback": "iconmind:river-duotone-bold",
	});
}

export default Component;

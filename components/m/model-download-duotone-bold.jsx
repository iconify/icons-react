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
		"content": `<style>.ffs26fbkv {
  d: path("M12 17v4");
}

.hdb6um70j {
  fill: currentColor;
  d: path("M14 4h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V7l3 -3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m1d6bh_7v {
  d: path("M14 4h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V7l3 -3h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vy337188j {
  d: path("m9 18 3 3 3 -3");
}
</style><g class="s0phu2bbs"><path class="hdb6um70j"/><path class="m1d6bh_7v"/><path class="ffs26fbkv"/><path class="vy337188j"/></g>`,
		"fallback": "iconmind:model-download-duotone-bold",
	});
}

export default Component;

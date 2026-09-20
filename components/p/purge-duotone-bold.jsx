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
		"content": `<style>.emoyz4b2o {
  d: path("m15 11 -6 6");
}

.i1jp0gbac {
  d: path("m9 11 6 6");
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tcztq2-_v {
  d: path("M5 9a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.zxav2h9ev {
  fill: currentColor;
  d: path("M5 9a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="zxav2h9ev"/><path class="tcztq2-_v"/><path class="mg7aqnbsf"/><path class="i1jp0gbac"/><path class="emoyz4b2o"/></g>`,
		"fallback": "iconmind:purge-duotone-bold",
	});
}

export default Component;

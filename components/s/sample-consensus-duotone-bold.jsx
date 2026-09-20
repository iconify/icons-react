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
		"content": `<style>.evlitcc2y {
  d: path("M2 6h10");
}

.gcm_1vbnz {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 6h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gtg_qfbzx {
  d: path("m15 12 2.5 2.5L22 10");
}

.onu1akn2n {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 16h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.reyu0nxyv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m15 12 2.5 2.5L22 10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vhfgw5-us {
  d: path("M2 16h10");
}

.yrj3_cbwh {
  d: path("M2 11h10");
}

.zleyw8bhf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 11h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="gcm_1vbnz"/><path class="zleyw8bhf"/><path class="onu1akn2n"/><path class="reyu0nxyv"/><path class="evlitcc2y"/><path class="yrj3_cbwh"/><path class="vhfgw5-us"/><path class="gtg_qfbzx"/></g>`,
		"fallback": "iconmind:sample-consensus-duotone-bold",
	});
}

export default Component;

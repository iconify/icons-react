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
		"content": `<style>.ckctb4ljv {
  d: path("M7.3 15.79a5 5 0 0 1 9.4 0");
}

.iml3cbclx {
  d: path("M8 7a4 4 0 0 1 8 0");
}

.ivqg9reic {
  d: path("M11 17.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wxrq2_b_h {
  d: path("M10.12 16.82a2 2 0 0 1 3.76 0");
}

.xfs8wlfhn {
  d: path("M5 11.5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="xfs8wlfhn"/><path class="iml3cbclx"/><path class="ckctb4ljv"/><path class="wxrq2_b_h"/><path class="ivqg9reic"/></g>`,
		"fallback": "iconmind:side-channel-outline-bold",
	});
}

export default Component;

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
		"content": `<style>.g2hfxvq5b {
  d: path("m20 8 -3 -3");
}

.h-upazbnx {
  d: path("m4 8 3 -3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rp5jumb9f {
  d: path("M12 8v11");
}

.zstw_8bqr {
  d: path("M4 8v11h16V8");
}
</style><g class="hntgybcog"><path class="zstw_8bqr"/><path class="h-upazbnx"/><path class="g2hfxvq5b"/><path class="rp5jumb9f"/></g>`,
		"fallback": "iconmind:moving-box-outline-thin",
	});
}

export default Component;

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
		"content": `<style>.dxrk6jb6g {
  d: path("M4 14L20 14L14.5 20");
}

.hdcn_s_df {
  d: path("M20 10L4 10L9.5 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="hdcn_s_df"/><path class="dxrk6jb6g"/></g>`,
		"fallback": "solar:transfer-horizontal-linear",
	});
}

export default Component;

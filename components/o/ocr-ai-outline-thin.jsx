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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.ae-e09b3w {
  d: path("M3 12h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kdybz_aht {
  d: path("M9 17h6");
}

.mfc7nxp-y {
  d: path("M9 7h6");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="mfc7nxp-y"/><path class="ae-e09b3w"/><path class="kdybz_aht"/></g>`,
		"fallback": "iconmind:ocr-ai-outline-thin",
	});
}

export default Component;

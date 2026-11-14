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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ipsqhx4hx {
  d: path("M5.75 8.75a6.25 6.75 0 1 0 12.5 0a6.25 6.75 0 1 0-12.5 0");
}

.km41f2g9r {
  d: path("M12 15.5za1.25 1.25 0 0 1 1.25 1.25v3.5A1.25 1.25 0 0 1 12 21.5a1.25 1.25 0 0 1-1.25-1.25v-3.5A1.25 1.25 0 0 1 12 15.5M9.75 6.75h4.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H11.5L10 12v-1.25h-.25a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1");
}
</style><g class="hntgybcog"><path class="ipsqhx4hx"/><path class="km41f2g9r"/></g>`,
		"fallback": "uix:interview-preparation",
	});
}

export default Component;

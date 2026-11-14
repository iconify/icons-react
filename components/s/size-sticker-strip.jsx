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

.q829ifbgf {
  d: path("M6 7.5H3.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1H6m12-9h2.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H18M7.5 4h9A1.5 1.5 0 0 1 18 5.5v10L13.5 20h-6A1.5 1.5 0 0 1 6 18.5v-13A1.5 1.5 0 0 1 7.5 4");
}

.udg3cbi9q {
  d: path("M9 7.5V15h3.5");
}

.ykkcfobzb {
  fill: currentColor;
  d: path("m16.125 15.75l-.799.107a1.5 1.5 0 0 0-1.276 1.21l-.175.933a.63.63 0 0 0 1.064.561l1.723-1.723a.64.64 0 0 0-.537-1.088");
}
</style><g class="hntgybcog"><path class="q829ifbgf"/><path class="ykkcfobzb"/><path class="udg3cbi9q"/></g>`,
		"fallback": "uix:size-sticker-strip",
	});
}

export default Component;

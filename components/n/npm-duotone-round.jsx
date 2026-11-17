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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.jw82--isp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 3v18H3V3ZM6 18h12V6H6Z");
}

.q1h_58psq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 21V10M3 3h18v18H3Z");
}
</style><g class="ft5dv1b6b"><path class="jw82--isp"/><path class="q1h_58psq"/></g>`,
		"fallback": "coolicons:npm-duotone-round",
	});
}

export default Component;

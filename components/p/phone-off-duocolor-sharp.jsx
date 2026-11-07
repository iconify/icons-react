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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pltvggtgu {
  d: path("M7.686 16.314A15.95 15.95 0 0 1 3 5V3h6l2 5l-3 3l2.5 2.5m6.214-.214L21 15v6h-2c-2.878 0-5.578-.76-7.91-2.09");
}

.wfztb1bqh {
  stroke-opacity: 0.4;
  d: path("M2 22L22 2");
}
</style><g class="nrj6p8qat"><path class="wfztb1bqh"/><path class="pltvggtgu"/></g>`,
		"fallback": "coolicons:phone-off-duocolor-sharp",
	});
}

export default Component;

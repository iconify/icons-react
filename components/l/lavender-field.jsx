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
		"content": `<style>.t33dsjbvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h19M5 20.5L3 13m2 7.5V12m0 8.5L7 13m5 7.5L10 13m2 7.5V12m0 8.5l2-7.5m5 7.5L17 13m2 7.5V12m0 8.5l2-7.5M2.5 8q2-2.5 4 0q2-2.5 4 0q2-2.5 4 0q2-2.5 4 0q2-2.5 3-.5");
}
</style><path class="t33dsjbvc"/>`,
		"fallback": "uix:lavender-field",
	});
}

export default Component;

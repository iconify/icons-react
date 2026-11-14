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
		"content": `<style>.fz_wymbcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 18L7.5 7h9L19 18M2.5 18h19M12 7v11m-2.75-5.5h.01m5.49 0h.01");
}
</style><path class="fz_wymbcz"/>`,
		"fallback": "uix:storm-shelter",
	});
}

export default Component;

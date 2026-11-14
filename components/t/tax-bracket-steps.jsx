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
		"content": `<style>.ah_e-5teu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.6 19.5H2.5v-5h5.25V9H13V3.5h5.25v10.35m-3.5 7.4l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="ah_e-5teu"/>`,
		"fallback": "uix:tax-bracket-steps",
	});
}

export default Component;

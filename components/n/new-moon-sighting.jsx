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
		"content": `<style>.c5_vqq_7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3a9 9 0 0 0 0 18a11 11 0 0 1 0-18m2.971 11.615l4.079-1.902a1.5 1.5 0 0 1 1.993.726l.211.453a1.5 1.5 0 0 1-.725 1.993l-4.079 1.902a1.5 1.5 0 0 1-1.993-.726l-.211-.453a1.5 1.5 0 0 1 .725-1.993M17.75 16.5l-2 5m2-5l2.25 5");
}
</style><path class="c5_vqq_7m"/>`,
		"fallback": "uix:new-moon-sighting",
	});
}

export default Component;

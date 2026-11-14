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
		"content": `<style>.et-7rbcvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.896 3.988a9.5 9.5 0 0 1 10.208 0m2.908 2.908a9.5 9.5 0 0 1 0 10.208m-2.908 2.908a9.5 9.5 0 0 1-10.208 0m-2.908-2.908a9.5 9.5 0 0 1 0-10.208M12 12l3.25-3.25M12 12h.01");
}
</style><path class="et-7rbcvt"/>`,
		"fallback": "uix:story-countdown",
	});
}

export default Component;

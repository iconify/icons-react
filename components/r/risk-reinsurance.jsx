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
		"content": `<style>.sirz1ebsz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.573 21.218q-.284.146-.573.282C7.75 19.5 4.5 16 4.5 11V5.25L12 2.5l7.5 2.75V11q0 .353-.021.696M15 16.25h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}
</style><path class="sirz1ebsz"/>`,
		"fallback": "uix:risk-reinsurance",
	});
}

export default Component;

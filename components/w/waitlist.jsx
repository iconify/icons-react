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
		"content": `<style>.rn59enbdf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 5H19M7.5 10.5H19M7.5 16h5M3.75 5h.01m-.01 5.5h.01M3.75 16h.01M15 14.25h6m-6 7.5h6m-5.25-7.5l4.5 7.5m0-7.5l-4.5 7.5");
}
</style><path class="rn59enbdf"/>`,
		"fallback": "uix:waitlist",
	});
}

export default Component;

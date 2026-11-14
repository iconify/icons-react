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
		"content": `<style>.q_5_1kbkt {
  d: path("M6.5 10.5h11V14h-11Zm0 6.5h6");
}

.qo05omb1p {
  d: path("M3 4h18v17.5H3Zm5-1.5V6m8-3.5V6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qo05omb1p"/><path class="q_5_1kbkt"/></g>`,
		"fallback": "uix-sharp:lab-schedule",
	});
}

export default Component;

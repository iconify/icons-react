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
		"content": `<style>.qmq3g4b_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10h.01M9.879 7.879a3 3 0 0 1 4.242 0M7.757 5.757a6 6 0 0 1 8.486 0M4 13.5h16M2.5 17h19m-16-3.5V21m13-7.5V21");
}
</style><path class="qmq3g4b_s"/>`,
		"fallback": "uix:public-wifi-zone",
	});
}

export default Component;

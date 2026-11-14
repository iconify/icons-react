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
		"content": `<style>.d2obf_okd {
  d: path("M8.5 3L6 9l6 4l6-4l-2.5-6M12 13l2.5 8m-8-8.5V21m11-8.5V21");
}

.l5ehqlbxn {
  d: path("M8.5 3L3 5.5L2.5 21h19L21 5.5L15.5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l5ehqlbxn"/><path class="d2obf_okd"/></g>`,
		"fallback": "uix-sharp:leather-jacket",
	});
}

export default Component;

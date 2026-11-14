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
		"content": `<style>.cigy526xb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.297 5.681l2.28-.912a1.75 1.75 0 0 1 1.339.017l2.168.928a1.75 1.75 0 0 0 1.339.017l1.295-.518a1.75 1.75 0 0 1 2.327 1.128l2.963 9.999a1.75 1.75 0 0 1-1.163 2.169l-4.309 1.326a1.75 1.75 0 0 1-1.068-.012l-4.936-1.646a1.75 1.75 0 0 0-1.068-.012l-2.88.886a1.75 1.75 0 0 1-2.198-2.153L6.264 6.825a1.75 1.75 0 0 1 1.033-1.144M10.25 4.5L9 18m4.75-12L15 20");
}
</style><path class="cigy526xb"/>`,
		"fallback": "uix:map-tilt",
	});
}

export default Component;

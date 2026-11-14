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
		"content": `<style>.yz1bpvb4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5v7Q2.5 14 5 14h3.5m-2.75 0v4.5m-3 0h6m12.75-14v7q0 2.5-2.5 2.5h-3.5m2.75 0v4.5m-3 0h6M9.75 11h4.5M12 11v7.5m-1.75 0h3.5");
}
</style><path class="yz1bpvb4z"/>`,
		"fallback": "uix:one-on-one-meeting",
	});
}

export default Component;

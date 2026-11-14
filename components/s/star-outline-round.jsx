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
		"content": `<style>.kjfz_kbym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.125 6.375l.725 2.014a1.75 1.75 0 0 0 1.579 1.156l2.071.08a1.168 1.168 0 0 1 .663 2.096l-1.68 1.28a1.75 1.75 0 0 0-.606 1.926l.623 1.948a1.129 1.129 0 0 1-1.711 1.277l-1.803-1.23a1.75 1.75 0 0 0-1.972 0l-1.803 1.23A1.129 1.129 0 0 1 7.5 16.875l.623-1.948a1.75 1.75 0 0 0-.606-1.926l-1.68-1.28A1.168 1.168 0 0 1 6.5 9.625l2.071-.08a1.75 1.75 0 0 0 1.579-1.156l.725-2.014a1.196 1.196 0 0 1 2.25 0");
}
</style><path class="kjfz_kbym"/>`,
		"fallback": "uix:star-outline-round",
	});
}

export default Component;

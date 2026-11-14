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
		"content": `<style>.pkdp1cbcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.087 2.5h5.826a2.63 2.63 0 0 1 1.856.769l3.962 3.962a2.63 2.63 0 0 1 .769 1.856v5.826a2.63 2.63 0 0 1-.769 1.856l-3.962 3.962a2.63 2.63 0 0 1-1.856.769H9.087a2.63 2.63 0 0 1-1.856-.769l-3.962-3.962a2.63 2.63 0 0 1-.769-1.856V9.087a2.63 2.63 0 0 1 .769-1.856l3.962-3.962A2.63 2.63 0 0 1 9.087 2.5M9 9l6 6m0-6l-6 6");
}
</style><path class="pkdp1cbcz"/>`,
		"fallback": "uix:test-fail",
	});
}

export default Component;

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
		"content": `<style>.iu6vc453z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5v19m12-19v19M4.75 6.5h14.5A1.75 1.75 0 0 1 21 8.25A1.75 1.75 0 0 1 19.25 10H4.75A1.75 1.75 0 0 1 3 8.25A1.75 1.75 0 0 1 4.75 6.5");
}
</style><path class="iu6vc453z"/>`,
		"fallback": "uix:ski-start-gate",
	});
}

export default Component;

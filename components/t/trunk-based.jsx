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
		"content": `<style>.ak2n4gnrz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19M3.25 6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.5l4.75 4m4.25-1a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m.5 1.5L12 16");
}
</style><path class="ak2n4gnrz"/>`,
		"fallback": "uix:trunk-based",
	});
}

export default Component;

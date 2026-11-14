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
		"content": `<style>.fokybdc7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 6V5a2 2 0 0 1 2-2h2.5v14.5M9.25 21l.75-3.5h5l.75 3.5");
}
</style><path class="fokybdc7h"/>`,
		"fallback": "uix:walking-stick",
	});
}

export default Component;

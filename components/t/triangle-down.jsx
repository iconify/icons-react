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
		"content": `<style>.mwsusny-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.56 4.5h8.88a2.625 2.625 0 0 1 2.27 3.943l-4.44 7.647a2.625 2.625 0 0 1-4.54 0L5.29 8.443A2.625 2.625 0 0 1 7.56 4.5");
}
</style><path class="mwsusny-l"/>`,
		"fallback": "uix:triangle-down",
	});
}

export default Component;

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
		"content": `<style>.leqbpp1pv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4.75h11l4 11v3.5h-19v-3.5Zm-4 11h19M4.75 9.5h14.5M12 4.75v11");
}
</style><path class="leqbpp1pv"/>`,
		"fallback": "uix:tennis-court-clay",
	});
}

export default Component;

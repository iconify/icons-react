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
		"content": `<style>.f_g92t6bd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3.5 4.5L5 3L5 8M3 8H7M3 16.3C3 15.5 3.84 15 4.89 15C6.05 15 7 15.7 7 16.7C7 18.6 3 19.9 3 21H7M11 5H21M11 12H21M11 19H21");
}
</style><path class="f_g92t6bd"/>`,
		"fallback": "keyline-icons:list-ordered",
	});
}

export default Component;

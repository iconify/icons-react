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
		"content": `<style>.liy3_sdql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11c0-5 4-7.5 8-7.5S20 6 20 11Zm1.75 6.5h12.5A1.75 1.75 0 0 1 20 19.25A1.75 1.75 0 0 1 18.25 21H5.75A1.75 1.75 0 0 1 4 19.25a1.75 1.75 0 0 1 1.75-1.75m-2.25-3h17");
}
</style><path class="liy3_sdql"/>`,
		"fallback": "uix:pin-fast-food",
	});
}

export default Component;

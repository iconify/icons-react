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
		"content": `<style>.od0bhb3en {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 8za5.25 5.25 0 0 1 5.25 5.25v3a5.25 5.25 0 0 1-5.25 5.25A5.25 5.25 0 0 1 4 16.25v-3A5.25 5.25 0 0 1 9.25 8m0 3v2M13 5a4 4 0 0 1 4 4m-4-7a7 7 0 0 1 7 7");
}
</style><path class="od0bhb3en"/>`,
		"fallback": "uix:mouse-wireless",
	});
}

export default Component;

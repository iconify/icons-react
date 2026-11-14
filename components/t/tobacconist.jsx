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
		"content": `<style>.tqjxp1cxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 10.5h8v5a4 4 0 0 1-8 0ZM3 13l10 2.5m4-7C15.5 7 18.5 6 17 4");
}
</style><path class="tqjxp1cxx"/>`,
		"fallback": "uix:tobacconist",
	});
}

export default Component;

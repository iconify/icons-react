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
		"content": `<style>.cynumhi0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9.5a4.5 6.25 0 1 0 9 0a4.5 6.25 0 1 0-9 0m7.25 2.75L21 19.5m-18.5-1a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M7.818 6.318l6.364 6.364");
}
</style><path class="cynumhi0g"/>`,
		"fallback": "uix:tennis-volley",
	});
}

export default Component;

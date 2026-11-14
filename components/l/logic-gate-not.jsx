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
		"content": `<style>.fty08tc3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.263 6.837l6.552 3.872a1.5 1.5 0 0 1 0 2.582l-6.552 3.872A1.5 1.5 0 0 1 5 15.871V8.129a1.5 1.5 0 0 1 2.263-1.292M16 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2.5 12H5");
}
</style><path class="fty08tc3v"/>`,
		"fallback": "uix:logic-gate-not",
	});
}

export default Component;

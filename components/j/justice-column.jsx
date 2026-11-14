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
		"content": `<style>.nb06n74bt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 7.5l7-5l7 5Zm1.5 2.75h11m-8.5 0V18m6-7.75V18m-7.5 0h9a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20v-.5A1.5 1.5 0 0 1 7.5 18");
}
</style><path class="nb06n74bt"/>`,
		"fallback": "uix:justice-column",
	});
}

export default Component;

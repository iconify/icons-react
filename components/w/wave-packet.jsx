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
		"content": `<style>.pn3v8s_5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5h19m-19 0c1.25-3 2.25-3 3.5 0c1.25 6 2.75 6 4 0c1.25-10 2.75-10 4 0c1.25 6 2.75 6 4 0c1.25-3 2.25-3 3.5 0");
}
</style><path class="pn3v8s_5p"/>`,
		"fallback": "uix:wave-packet",
	});
}

export default Component;

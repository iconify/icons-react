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
		"content": `<style>.a7m7hbcgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h5v2.5h7v2h7v5h-7v2h-7V19h-5Zm5 2.5v9m7-7v5");
}
</style><path class="a7m7hbcgc"/>`,
		"fallback": "uix:machined-part",
	});
}

export default Component;

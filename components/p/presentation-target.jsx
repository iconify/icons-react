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
		"content": `<style>.fs24mlbdp {
  d: path("M8.75 9a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM12 9h.01");
}

.hfz_bob2l {
  d: path("M3 3h18v12H3Zm9 12v6m0-6l-5 6m5-6l5 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hfz_bob2l"/><path class="fs24mlbdp"/></g>`,
		"fallback": "uix-sharp:presentation-target",
	});
}

export default Component;

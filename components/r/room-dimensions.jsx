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
		"content": `<style>.vss8_u8ev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5H11V9h10.5v7.5h-19zm0 17.5h19m-19-1.5v3m19-3v3m-17-2.75L2.5 20l2 1.25m15-2.5l2 1.25l-2 1.25");
}
</style><path class="vss8_u8ev"/>`,
		"fallback": "uix:room-dimensions",
	});
}

export default Component;

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
		"content": `<style>.an11r1mmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.996 17.882l4-7A1.75 1.75 0 0 1 9.516 10h4.968a1.75 1.75 0 0 1 1.52.882l4 7a1.75 1.75 0 0 1-1.52 2.618H5.516a1.75 1.75 0 0 1-1.52-2.618M12 3v4.25m-3.25 0L6.75 4m8.5 3.25l2-3.25");
}
</style><path class="an11r1mmr"/>`,
		"fallback": "uix:pin-volcano",
	});
}

export default Component;

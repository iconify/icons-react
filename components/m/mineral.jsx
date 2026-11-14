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
		"content": `<style>.epmau3bcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.115 4.239l2.86 3.178a1.5 1.5 0 0 1 .345 1.347l-1.548 6.58a1.5 1.5 0 0 1-1.46 1.156h-2.624a1.5 1.5 0 0 1-1.46-1.156L7.68 8.764a1.5 1.5 0 0 1 .345-1.347l2.86-3.178a1.5 1.5 0 0 1 2.23 0M3.5 21l3-4.5h11l3 4.5ZM12 3v13.5");
}
</style><path class="epmau3bcq"/>`,
		"fallback": "uix:mineral",
	});
}

export default Component;

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
		"content": `<style>.bg-z4ebky {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.5zA1.75 1.75 0 0 1 6.5 4.25v15.5a1.75 1.75 0 0 1-1.75 1.75A1.75 1.75 0 0 1 3 19.75V4.25A1.75 1.75 0 0 1 4.75 2.5m14.5 0zA1.75 1.75 0 0 1 21 4.25v15.5a1.75 1.75 0 0 1-1.75 1.75a1.75 1.75 0 0 1-1.75-1.75V4.25a1.75 1.75 0 0 1 1.75-1.75M9.25 7h5.5m-5.5 5h5.5m-5.5 5h5.5");
}
</style><path class="bg-z4ebky"/>`,
		"fallback": "uix:safety-light-curtain",
	});
}

export default Component;

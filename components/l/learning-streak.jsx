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
		"content": `<style>.dev6x1e-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3s6 5.5 6 11a6 6 0 0 1-12 0c0-2.75 1.75-4.5 3-6c0 1.75.75 3 2 3c-.5-2.75 0-5.5 1-8M9.5 21.5h5");
}
</style><path class="dev6x1e-p"/>`,
		"fallback": "uix:learning-streak",
	});
}

export default Component;

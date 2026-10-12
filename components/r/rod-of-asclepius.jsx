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
		"content": `<style>.rqsnwebix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v18.5m-2.75-.75c1.25-.25 1.75-2 2.75-2c3.5 0 3.5-3.5 0-3.5s-3.5-3.5 0-3.5S15.5 8 12 8c-2 0-2.75-1-3.25-2.5m-1.5-2.25a1.75 1.25 0 1 1 0 2.5a1.75 1.25 0 1 1 0-2.5");
}
</style><path class="rqsnwebix"/>`,
		"fallback": "iconoven:rod-of-asclepius",
	});
}

export default Component;

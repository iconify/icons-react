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
		"content": `<style>.a9r6lebzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 2.75v12.5a1 1 0 0 0 1 1h13.5m-18.5-9.5h9.5a1 1 0 0 1 1 1v13.5M15 3.5a4.75 4.75 0 0 1 4.75 4.75m-1.5-1.5l1.5 1.5l1.5-1.5");
}
</style><path class="a9r6lebzd"/>`,
		"fallback": "iconoven:rotate-crop",
	});
}

export default Component;

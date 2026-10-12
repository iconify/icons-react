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
		"content": `<style>.du79dcbge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.75 4.25l9 11m0-11l-9 11M16 15.5a1.75 1.75 0 1 1 3.25.9L16 20.5h3.75");
}
</style><path class="du79dcbge"/>`,
		"fallback": "iconoven:subscript",
	});
}

export default Component;

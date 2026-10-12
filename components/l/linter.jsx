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
		"content": `<style>.prerp1uph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h11.5m-11.5 5h18.5m-18.5 5h13m-13 5c1.25-1.5 2-1.5 3.25 0s2 1.5 3.25 0s2-1.5 3.25 0s2 1.5 3.25 0");
}
</style><path class="prerp1uph"/>`,
		"fallback": "iconoven:linter",
	});
}

export default Component;

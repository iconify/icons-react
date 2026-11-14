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
		"content": `<style>.jwt3n61ox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.25 4.639A8.5 8.5 0 0 1 20.5 12M12 20.5A8.5 8.5 0 0 1 7.75 4.639M12 2.5V10m4.75 7.75h2.5A1.75 1.75 0 0 1 21 19.5v.25a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.75v-.25a1.75 1.75 0 0 1 1.75-1.75m-.25 0V16.5a1.5 1.5 0 0 1 3 0v1.25");
}
</style><path class="jwt3n61ox"/>`,
		"fallback": "uix:power-lock",
	});
}

export default Component;

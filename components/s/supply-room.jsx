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
		"content": `<style>.zi2539bgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19m16-19v19M4 9.5h16m-16 7h16M7 4.5h5v5H7Zm7.75 2h2.75v3h-2.75ZM8.5 12h7v4.5h-7Z");
}
</style><path class="zi2539bgh"/>`,
		"fallback": "uix-sharp:supply-room",
	});
}

export default Component;

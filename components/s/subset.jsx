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
		"content": `<style>.zmb4hnbqa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.25 3.75H12a6 6 0 0 0 0 12h7.25m-14.5 4.5h14.5");
}
</style><path class="zmb4hnbqa"/>`,
		"fallback": "iconoven:subset",
	});
}

export default Component;

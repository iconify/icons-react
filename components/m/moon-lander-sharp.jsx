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
		"content": `<style>.kzbq4rbjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3.5h6l.51.86l1.98 3.28l.51.86l-.51.86l-1.98 3.28l-.51.86h-7l-.51-.86l-1.98-3.28l-.51-.86l.51-.86l1.98-3.28l.51-.86zm-1 10L5 20.75m7-7.25v7.25m3.5-7.25l3.5 7.25");
}
</style><path class="kzbq4rbjd"/>`,
		"fallback": "iconoven:moon-lander-sharp",
	});
}

export default Component;

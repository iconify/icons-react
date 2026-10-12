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
		"content": `<style>.m6v8cdb0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14.25v-9h3l.231 2.76L8.75 8H10l2.25-2.25l7.1 4.75l1.94 1.373l-.04 2.377Zm10-6L11.5 10m3.5-.25l-1.25 1.75m-11 5h18.5v4.75H2.75zM7 18.88h2m2 0h2m2 0h2");
}
</style><path class="m6v8cdb0y"/>`,
		"fallback": "iconoven:running-shoe-sharp",
	});
}

export default Component;

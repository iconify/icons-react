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
		"content": `<style>.m-f8ynb0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11h18.5M12 8.5v11.15l-2 1.6m2-7.75c-1.5 0-3 .75-4.25 2.25L6.5 17v2m5.5-4.25c1.75 0 3.25 1 4.25 2.5l.75 1.125V20M12 8.5c-.25-2.75-2-4.25-5-4.25C7.25 7 9 8.5 12 8.5Zm0 0c.25-2.75 2-4.25 5-4.25C16.75 7 15 8.5 12 8.5Z");
}
</style><path class="m-f8ynb0v"/>`,
		"fallback": "iconoven:root-sharp",
	});
}

export default Component;

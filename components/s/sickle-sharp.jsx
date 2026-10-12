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
		"content": `<style>.sazaugbvv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 14.25a6.75 6.75 0 1 1 11.5-3.75c-2.5-1.75-4.25-3.75-6-3.75a4.5 4.5 0 0 0-3 7.75Zm1.25.5L4 21");
}
</style><path class="sazaugbvv"/>`,
		"fallback": "iconoven:sickle-sharp",
	});
}

export default Component;

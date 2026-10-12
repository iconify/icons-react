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
		"content": `<style>.q-cj06bhz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h4v16.5h-4zm7-2h4.5v18.5h-4.5zm7.5 4h4v14.5h-4zm-14.5 2h4m10.5 2h4");
}
</style><path class="q-cj06bhz"/>`,
		"fallback": "iconoven:library-sharp",
	});
}

export default Component;

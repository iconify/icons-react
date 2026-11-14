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
		"content": `<style>.frdelp4vz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10l-1 11l-2.5 3h-3L8 14Zm3.5 14h3v4.5h-3ZM7.25 6h9.5");
}
</style><path class="frdelp4vz"/>`,
		"fallback": "uix-sharp:oil-paint-tubes",
	});
}

export default Component;

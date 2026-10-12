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
		"content": `<style>.t9i6o1bmv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10h3.5v3.5H3zm0 6.5h9m-8 0L5 21h5l1-4.5M3.75 3.75l16.5 16.5");
}
</style><path class="t9i6o1bmv"/>`,
		"fallback": "iconoven:no-littering-sharp",
	});
}

export default Component;

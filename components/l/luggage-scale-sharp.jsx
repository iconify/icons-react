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
		"content": `<style>.boioita6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 2.75h4.5m-2.25 0v3m-2.75 0h5.5v5.5h-5.5zm2.75 2v1.5m0 2v3m-2.25 3v-3h4.5v3m-9.5 0h14.5v4H4.75z");
}
</style><path class="boioita6m"/>`,
		"fallback": "iconoven:luggage-scale-sharp",
	});
}

export default Component;

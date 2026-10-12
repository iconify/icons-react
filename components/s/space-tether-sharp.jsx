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
		"content": `<style>.nolb2-_oy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h5.5v5.5h-5.5zm13 13h5.5v5.5h-5.5zm-7.5-7.5C11.75 8.25 8.5 13 12 13s.25 2.75 3.75 2.75");
}
</style><path class="nolb2-_oy"/>`,
		"fallback": "iconoven:space-tether-sharp",
	});
}

export default Component;

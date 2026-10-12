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
		"content": `<style>.gwy-b1eis {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5H8l.34.67l.07.16l.34.67H11l.44-.61l1.12-1.53l.44-.61h2.25l.62.43l4.51 3.14l.62.43l-.45.6l-.6.8l-.45.6h-16l-.12-.74l-.51-3.27l-.12-.74zm11.25-1.25L13 4.75m-1 9.5v5.5m-7.25 0h16.5V17");
}
</style><path class="gwy-b1eis"/>`,
		"fallback": "iconoven:snowmobile-sharp",
	});
}

export default Component;

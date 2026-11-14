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
		"content": `<style>.ofy07xbzb {
  d: path("M6 3v3h3m3 1.5V12l3 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vyt9i_-zs {
  d: path("M3.5 12A8.5 8.5 0 1 0 6 6");
}
</style><g class="ulnmmdpxh"><path class="vyt9i_-zs"/><path class="ofy07xbzb"/></g>`,
		"fallback": "uix-sharp:recent",
	});
}

export default Component;

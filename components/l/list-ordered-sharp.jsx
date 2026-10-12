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
		"content": `<style>.f8ndn5bsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 6h10m-10 6h10m-10 6h10m-16-12.75L6 3.75v6.5m-2 5a1.75 1.75 0 1 1 3.25.9L4 20.25h3.75");
}
</style><path class="f8ndn5bsn"/>`,
		"fallback": "iconoven:list-ordered-sharp",
	});
}

export default Component;

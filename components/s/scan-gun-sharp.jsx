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
		"content": `<style>.hwrs2sb8x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 4.25h12v6.5h-6l-1 9.6l-.091.905l-.909-.005H5.9l-1.111.006l.111-1.106l.85-9.4h-3v-6.5zm14.5.5l2-1.25m-2 4h2m-2 2.75l2 1.25");
}
</style><path class="hwrs2sb8x"/>`,
		"fallback": "iconoven:scan-gun-sharp",
	});
}

export default Component;

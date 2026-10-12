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
		"content": `<style>.me4egdcvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.26 13.76l10.5-10.5a1.75 1.75 0 0 1 2.48 2.48l-10.5 10.5a1.75 1.75 0 0 1-2.48-2.48Zm9.49-.26h8.5m-7.25 0v3a3 3 0 0 0 6 0v-3m-3 0V16");
}
</style><path class="me4egdcvt"/>`,
		"fallback": "iconoven:tongue-depressor-sharp",
	});
}

export default Component;

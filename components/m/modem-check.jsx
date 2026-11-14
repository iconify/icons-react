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
		"content": `<style>.ppjc_ubiw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19v9h-19Zm4 4.5h.01m3.49 0h.01M6.804 7a6 6 0 0 1 10.392 0");
}
</style><path class="ppjc_ubiw"/>`,
		"fallback": "uix-sharp:modem-check",
	});
}

export default Component;

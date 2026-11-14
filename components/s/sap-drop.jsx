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
		"content": `<style>.hkmkf-fpd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v3.5h-19ZM12 6.5c0 3.5 4.5 6 4.5 10a4.5 4.5 0 0 1-9 0c0-4 4.5-6.5 4.5-10ZM10.5 17h.01");
}
</style><path class="hkmkf-fpd"/>`,
		"fallback": "uix-sharp:sap-drop",
	});
}

export default Component;

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
		"content": `<style>.ba1jllbmm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h11v18H3Zm11 0l7 2.5v13L14 21ZM6 7.5h5m-5 4h5m-5 4h3");
}
</style><path class="ba1jllbmm"/>`,
		"fallback": "uix-sharp:leaflet-folded",
	});
}

export default Component;

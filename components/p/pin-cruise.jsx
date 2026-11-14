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
		"content": `<style>.rtcm0jixq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19L19 19H5ZM6 8.5h11V13H6ZM10.5 4h3v4.5h-3Z");
}
</style><path class="rtcm0jixq"/>`,
		"fallback": "uix-sharp:pin-cruise",
	});
}

export default Component;

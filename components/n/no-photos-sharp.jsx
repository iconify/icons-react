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
		"content": `<style>.hquja7e7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.19 7H19m0 0h2v2m0 0v8m0 0l.001.356l-.121.334M15.81 19H5m0 0H3v-2m0 0V9m0 0V7.807l1.05-.567M8.78 5.6l.47-.85h5.5L16 7m-2.67 9.51a3.75 3.75 0 0 1-4.84-4.84m3.98-2.39l2.885.365l.365 2.885M3.75 3.75l16.5 16.5");
}
</style><path class="hquja7e7j"/>`,
		"fallback": "iconoven:no-photos-sharp",
	});
}

export default Component;

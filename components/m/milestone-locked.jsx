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
		"content": `<style>.txyom1-jn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5v19M5.5 3l12 4l-12 4ZM3 21.5h5m7-4h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="txyom1-jn"/>`,
		"fallback": "uix-sharp:milestone-locked",
	});
}

export default Component;

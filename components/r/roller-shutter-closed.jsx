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
		"content": `<style>.ddqc-s46m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19v5h-19Zm2 5v14m15-14v14m-17 0h19M4.5 11h15m-15 3.5h15M4.5 18h15");
}
</style><path class="ddqc-s46m"/>`,
		"fallback": "uix-sharp:roller-shutter-closed",
	});
}

export default Component;

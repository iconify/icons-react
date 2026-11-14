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
		"content": `<style>.hkk-xm1hq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19v14h-19Zm0 7h19M9 5v7m6-7v7m-9.25 0v7M12 12v7m6.25-7v7");
}
</style><path class="hkk-xm1hq"/>`,
		"fallback": "uix-sharp:wall-line",
	});
}

export default Component;

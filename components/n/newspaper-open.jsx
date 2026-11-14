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
		"content": `<style>.re7ivus-j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h19v15h-19Zm9.5 0v15M5.5 9H9m-3.5 4H9m6-4h3.5M15 13h3.5");
}
</style><path class="re7ivus-j"/>`,
		"fallback": "uix-sharp:newspaper-open",
	});
}

export default Component;

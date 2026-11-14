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
		"content": `<style>.nfvm9qngv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12.25V9.5l7-6l7 6v2.75M2.5 21.5v-5L3.75 15L5 16.5v5m3 0v-5L9.25 15l1.25 1.5v5m3 0v-5l1.25-1.5L16 16.5v5m3 0v-5l1.25-1.5l1.25 1.5v5m-19-3h19M12 9h.01");
}
</style><path class="nfvm9qngv"/>`,
		"fallback": "uix-sharp:suburb",
	});
}

export default Component;

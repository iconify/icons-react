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
		"content": `<style>.a8v1kgbhx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5h15l-1 13h-13Zm8 0v-3H17v3m-5-6h5.5v3H12Zm-7.25 9h14.5m-7.25 3v4m-2-2h4");
}
</style><path class="a8v1kgbhx"/>`,
		"fallback": "uix-sharp:patient-pickup",
	});
}

export default Component;

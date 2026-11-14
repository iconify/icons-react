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
		"content": `<style>.k3mnj9htw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19V7h-19Zm3 4.5h13v12.5h-13Zm4 9.5l5-6.5m-4.75.5h.01m4.49 5.5h.01");
}
</style><path class="k3mnj9htw"/>`,
		"fallback": "uix-sharp:shelf-label-red",
	});
}

export default Component;

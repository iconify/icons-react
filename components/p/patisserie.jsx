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
		"content": `<style>.t10x4qrfk {
  fill: currentColor;
  d: path("M14 6.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.u-rh33ysl {
  d: path("M4.5 17.5v-6l15-4v10Zm-2 3h19m-17-6h15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u-rh33ysl"/><path class="t10x4qrfk"/></g>`,
		"fallback": "uix-sharp:patisserie",
	});
}

export default Component;

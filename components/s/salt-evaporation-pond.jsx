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
		"content": `<style>.xz-92iabi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12h15l2.5 9H2Zm7.5 0v9m-8.75-4.5h17.5M10 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM5.75 6h1.5m9.5 0h1.5m-9.5-3.25L8 2m7.25.75L16 2");
}
</style><path class="xz-92iabi"/>`,
		"fallback": "uix-sharp:salt-evaporation-pond",
	});
}

export default Component;

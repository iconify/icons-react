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
		"content": `<style>.dd5sv1bne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.861 7.412l15.757-2.778l.521 2.954l-15.757 2.778ZM3 14h18M6 14v6m12-6v6");
}
</style><path class="dd5sv1bne"/>`,
		"fallback": "uix-sharp:snowboarder-rail",
	});
}

export default Component;

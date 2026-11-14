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
		"content": `<style>.s9hjcfblv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h15l-2.5 10h-15ZM4.75 8h15M13.5 3L11 13m6 0v3.5m-3 0h6v5h-6Z");
}
</style><path class="s9hjcfblv"/>`,
		"fallback": "uix-sharp:micro-inverter",
	});
}

export default Component;

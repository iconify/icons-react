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
		"content": `<style>.mwxgm9byb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.6 18.5H3V6h17v6.1M8 2.5L11.5 6L15 2.5m.5 13l5 5m0-5l-5 5");
}
</style><path class="mwxgm9byb"/>`,
		"fallback": "uix-sharp:live-broadcast-x",
	});
}

export default Component;

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
		"content": `<style>.tougdtkwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18M3 12q9-9 18 0M3 12q9 9 18 0M3 9v6m18-6v6");
}
</style><path class="tougdtkwo"/>`,
		"fallback": "uix-sharp:string-vibration",
	});
}

export default Component;

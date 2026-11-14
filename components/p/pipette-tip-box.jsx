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
		"content": `<style>.cwdr3mblo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h19v11h-19Zm2-6h3l-1 6h-1Zm6 0h3l-1 6h-1Zm6 0h3l-1 6h-1Z");
}
</style><path class="cwdr3mblo"/>`,
		"fallback": "uix-sharp:pipette-tip-box",
	});
}

export default Component;

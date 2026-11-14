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
		"content": `<style>.jaiy4vm3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h10v5.5h9M4.5 14V5M8 14V5m3.5 9V5");
}
</style><path class="jaiy4vm3j"/>`,
		"fallback": "uix-sharp:lawn-edge-cut",
	});
}

export default Component;

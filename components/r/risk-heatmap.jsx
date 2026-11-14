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
		"content": `<style>.x7n0txbjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h17v17h-17Zm5.75 0v17m5.5-17v17M3.5 9.25h17m-17 5.5h17M17.75 6.5h.01M12 12h.01");
}
</style><path class="x7n0txbjd"/>`,
		"fallback": "uix-sharp:risk-heatmap",
	});
}

export default Component;

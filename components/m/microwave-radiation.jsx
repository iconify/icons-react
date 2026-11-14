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
		"content": `<style>.bh_f5_b0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6q3-3 6 0t6 0t6 0M3 12q3-3 6 0t6 0t6 0M3 18q3-3 6 0t6 0t6 0");
}
</style><path class="bh_f5_b0z"/>`,
		"fallback": "uix-sharp:microwave-radiation",
	});
}

export default Component;

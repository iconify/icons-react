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
		"content": `<style>.qq6bnxb1h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10h17m-17 4h17M12 2.5v4M9.75 4.25L12 6.5l2.25-2.25M12 21.5v-4m-2.25 2.25L12 17.5l2.25 2.25");
}
</style><path class="qq6bnxb1h"/>`,
		"fallback": "uix-sharp:line-height-tight",
	});
}

export default Component;

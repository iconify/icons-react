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
		"content": `<style>.t00b1ub1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.75 7.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm1 2.75L4.5 19.5m3-3l2 2m.5-5l2 2m3 .75h6m-1.75-1.75L21 16.25L19.25 18M21 19.75h-6M16.75 18L15 19.75l1.75 1.75");
}
</style><path class="t00b1ub1b"/>`,
		"fallback": "uix-sharp:key-exchange",
	});
}

export default Component;

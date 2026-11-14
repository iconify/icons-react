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
		"content": `<style>.dk_ca__0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h8.5v7.5H3Zm12 1.5h6M15 10h6M3 15h18M3 19.5h12");
}
</style><path class="dk_ca__0d"/>`,
		"fallback": "uix-sharp:text-wrap-around",
	});
}

export default Component;

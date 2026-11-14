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
		"content": `<style>.iq68olbze {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8v5m-2-3.75l4 2.5m-4 0l4-2.5M12 8v5m-2-3.75l4 2.5m-4 0l4-2.5M19.5 8v5m-2-3.75l4 2.5m-4 0l4-2.5M2.5 17h19");
}
</style><path class="iq68olbze"/>`,
		"fallback": "uix-sharp:password-dots",
	});
}

export default Component;

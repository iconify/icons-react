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
		"content": `<style>.jq5g2xpyw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 18.4v2.1h-8v-18h8v13.3m-5.25 1.7h2.5m5.361-.389a5.5 5.5 0 0 1 7.778 0m-5.834 1.944a2.75 2.75 0 0 1 3.89 0M18 21h.01");
}
</style><path class="jq5g2xpyw"/>`,
		"fallback": "uix-sharp:mobile-wifi",
	});
}

export default Component;

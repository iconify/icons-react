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
		"content": `<style>.q5m2dsq2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9l9-5.5L21 9Zm0 11.5h18M6.5 11.75v6m5.5-6v6m5.5-6v6");
}
</style><path class="q5m2dsq2o"/>`,
		"fallback": "uix-sharp:pin-courthouse",
	});
}

export default Component;

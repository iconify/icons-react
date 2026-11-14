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
		"content": `<style>.der__h9va {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20v-3.5m4 3.5v-7.5m4 7.5V8.5m4 3.7V3.5M18 15v6m-3-3h6");
}
</style><path class="der__h9va"/>`,
		"fallback": "uix-sharp:signal-plus",
	});
}

export default Component;

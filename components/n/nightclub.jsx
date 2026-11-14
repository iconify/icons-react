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
		"content": `<style>.g60xwgvmb {
  d: path("M9 13.5a3 7.5 0 1 0 6 0a3 7.5 0 1 0-6 0Z");
}

.tmo-81b5z {
  d: path("M4.5 13.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Zm7.5-11V6m-7.5 7.5h15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tmo-81b5z"/><path class="g60xwgvmb"/></g>`,
		"fallback": "uix-sharp:nightclub",
	});
}

export default Component;

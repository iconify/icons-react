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
		"content": `<style>.o_e1aib7g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10h12.5v11H3Zm2 0V7.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V10m3 0l5-6h2.5M20 8s1.75 2.25 1.75 3.25a1.75 1.75 0 0 1-3.5 0C18.25 10.25 20 8 20 8Z");
}
</style><path class="o_e1aib7g"/>`,
		"fallback": "uix-sharp:kerosene",
	});
}

export default Component;

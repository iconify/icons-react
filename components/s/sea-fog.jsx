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
		"content": `<style>.s2fq-8bzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5h14M7 11h14M2.5 16q3.25-2.5 6.5 0t6.5 0t6 0");
}
</style><path class="s2fq-8bzn"/>`,
		"fallback": "uix-sharp:sea-fog",
	});
}

export default Component;

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
		"content": `<style>.e-hdyqbqb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3h9v18h-9Zm3 4h.01M18 12h.01M15 17h.01M3 7c2.5 2.5 2.5 7.5 0 10m4.25-8c1.5 1.5 1.5 4.5 0 6");
}
</style><path class="e-hdyqbqb"/>`,
		"fallback": "uix-sharp:sound-absorption",
	});
}

export default Component;

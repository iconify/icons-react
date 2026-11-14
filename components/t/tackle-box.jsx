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
		"content": `<style>.oups6lz0n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8h18v12H3Zm6 0V5h6v3M3 12h18M9 12v8m6-8v8");
}
</style><path class="oups6lz0n"/>`,
		"fallback": "uix-sharp:tackle-box",
	});
}

export default Component;

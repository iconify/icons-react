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
		"content": `<style>.shk6dgbly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18l-4.5 4c1.5.5 2 2.5.5 3.5H7c-1.5-1-1-3 .5-3.5Zm4.5 10.5h9m-7 3h5m-3.5 3h2");
}
</style><path class="shk6dgbly"/>`,
		"fallback": "uix-sharp:supercell",
	});
}

export default Component;

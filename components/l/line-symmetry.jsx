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
		"content": `<style>.wyu_-3z5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19M3.5 7L9 12l-5.5 5Zm17 0L15 12l5.5 5Z");
}
</style><path class="wyu_-3z5t"/>`,
		"fallback": "uix-sharp:line-symmetry",
	});
}

export default Component;

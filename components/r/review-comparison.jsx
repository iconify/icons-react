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
		"content": `<style>.xy8gcxnqh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5.5h17M12 3v17.5m-4 0h8M2.5 13h7a3.5 3.5 0 0 1-7 0m12 0h7a3.5 3.5 0 0 1-7 0M4.25 9.5h3.5V13h-3.5Zm12 0h3.5V13h-3.5Z");
}
</style><path class="xy8gcxnqh"/>`,
		"fallback": "uix-sharp:review-comparison",
	});
}

export default Component;

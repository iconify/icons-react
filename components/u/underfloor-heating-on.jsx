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
		"content": `<style>.rdlhseb7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h18M7 17c-1.5-2.25 1.5-4.75 0-7s1.5-4.75 0-6.5M12 17c-1.5-2.25 1.5-4.75 0-7s1.5-4.75 0-6.5M17 17c-1.5-2.25 1.5-4.75 0-7s1.5-4.75 0-6.5");
}
</style><path class="rdlhseb7z"/>`,
		"fallback": "uix-sharp:underfloor-heating-on",
	});
}

export default Component;

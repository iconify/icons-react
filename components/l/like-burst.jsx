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
		"content": `<style>.r73tijbch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 17.75s-5-3-5-6.25C7 10 8.25 8.75 9.75 8.75c1 0 1.75.75 2.25 1.5c.5-.75 1.5-1.5 2.25-1.5C15.75 8.75 17 10 17 11.5c0 3.25-5 6.25-5 6.25ZM12 3v2.5M5.5 5L7 6.5M18.5 5L17 6.5M3 12h2m16 0h-2");
}
</style><path class="r73tijbch"/>`,
		"fallback": "uix-sharp:like-burst",
	});
}

export default Component;

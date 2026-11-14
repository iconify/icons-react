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
		"content": `<style>.ftpe9xb1u {
  d: path("M8.75 13.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM12 8v2m-1.25-2h2.5M12 13.25V11.5");
}

.jey4w3qun {
  d: path("M3 5.5h18V10a2 2 0 0 0 0 4v4.5H3V14a2 2 0 0 0 0-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jey4w3qun"/><path class="ftpe9xb1u"/></g>`,
		"fallback": "uix-sharp:trial-day",
	});
}

export default Component;

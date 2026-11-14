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
		"content": `<style>.duporv-yi {
  d: path("M18.75 17c-.25-.5-.5-.5-.75-.5q-.75 0-.75.75c0 .5 1.5.5 1.5 1.5q0 .75-.75.75c-.5 0-.75-.25-.75-.5m.75-3.25v.75m0 3v.75");
}

.fo61n943j {
  d: path("M6.5 6h9v4.5h-9ZM9 14h3.5m1.5 4a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.tujeg877o {
  d: path("M11.3 19H3V2.5h16v8.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tujeg877o"/><path class="fo61n943j"/><path class="duporv-yi"/></g>`,
		"fallback": "uix-sharp:meter-token",
	});
}

export default Component;

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
		"content": `<style>.i9_wgoeyd {
  d: path("M2.5 16h15.75a3 3 0 0 0 0-6M6 12v4m6-4v4");
}

.moser-b7x {
  d: path("M3 8h12v4H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="moser-b7x"/><path class="i9_wgoeyd"/></g>`,
		"fallback": "uix-sharp:skeleton-sled",
	});
}

export default Component;

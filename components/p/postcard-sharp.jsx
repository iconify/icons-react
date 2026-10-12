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
		"content": `<style>.e7jei2aoz {
  d: path("M15 8h3.25v3.75H15z");
}

.wukf8fbag {
  d: path("M2.75 5.25h18.5v13.5H2.75zM12 8.5v7M5.75 10h3.5m-3.5 3h3.5m5.25 2.5h3.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="wukf8fbag"/><path class="e7jei2aoz"/></g>`,
		"fallback": "iconoven:postcard-sharp",
	});
}

export default Component;

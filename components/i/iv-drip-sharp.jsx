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
		"content": `<style>.iyehmzoji {
  d: path("M5.75 5.25h7.5v7h-7.5zM8 8.75h3m-1.5 3.5v2.25m0 3v3m-1.25-6h2.5v3h-2.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4oiyztym {
  d: path("M16 21.25V2.75H9.5v2.5m3.5 16h6");
}
</style><g class="x2cwu0gfd"><path class="y4oiyztym"/><path class="iyehmzoji"/></g>`,
		"fallback": "iconoven:iv-drip-sharp",
	});
}

export default Component;

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
		"content": `<style>.k9wk1abnv {
  d: path("m16.25 11.5l3.5 3.5l-3.5 3.5");
}

.ngd_4va2s {
  d: path("M20.25 5.5h-11a4.75 4.75 0 0 0 0 9.5h10.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ngd_4va2s"/><path class="k9wk1abnv"/></g>`,
		"fallback": "iconoven:u-turn-right-sharp",
	});
}

export default Component;

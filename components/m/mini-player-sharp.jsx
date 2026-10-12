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
		"content": `<style>.i0gym9b7a {
  d: path("m15.26 14.06l2.23 1.38l.51.31l-.51.31l-2.23 1.38l-.51.31v-4z");
}

.mnepmhb3d {
  d: path("m3.75 3.75l5 5m0-4v4h-4m6.5 2.5h10v9h-10z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mnepmhb3d"/><path class="i0gym9b7a"/></g>`,
		"fallback": "iconoven:mini-player-sharp",
	});
}

export default Component;

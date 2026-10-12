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
		"content": `<style>.jm--ehbda {
  d: path("M5.5 16c1.5-1.75 3.5-2.75 5-2.75S13.5 14 15 16q-2.25 2.25-4.5 2.25c-2.25 0-3.5-.75-5-2.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xejw0hbcm {
  d: path("m4.02 12.2l2.21-1.4L7.5 10l1.49.17l1.52.16l1.49.17l1.13-.75L14.25 9l.13-1.25l.12-1.25l-.5-1l-.5-1l.75-.87l.75-.88h4.25l.63.88l.62.87l-.62 1.13l-.63 1.12l.27 1.48l.96 5.29l.27 1.48l-.4 1.45l-.45 1.6l-.4 1.45l-1.34.67l-.32.16l-1.34.67H2.75v-8z");
}
</style><g class="x2cwu0gfd"><path class="xejw0hbcm"/><path class="jm--ehbda"/></g>`,
		"fallback": "iconoven:muscle-arm-sharp",
	});
}

export default Component;

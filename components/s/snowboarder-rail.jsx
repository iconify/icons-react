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
		"content": `<style>.nb9kxtazo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.338 7.152l12.803-2.258a1.5 1.5 0 0 1 1.737 1.217a1.5 1.5 0 0 1-1.216 1.737L5.859 10.106a1.5 1.5 0 0 1-1.737-1.217a1.5 1.5 0 0 1 1.216-1.737M3 14h18M6 14v6m12-6v6");
}
</style><path class="nb9kxtazo"/>`,
		"fallback": "uix:snowboarder-rail",
	});
}

export default Component;

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
		"content": `<style>.dht9gdbkm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3H4v18h3M17 3h3v18h-3M12 7.5v9M8 9.75l8 4.5m-8 0l8-4.5");
}
</style><path class="dht9gdbkm"/>`,
		"fallback": "uix-sharp:regex",
	});
}

export default Component;

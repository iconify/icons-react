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
		"content": `<style>.x8k_9xbko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.25L21.75 12L12 21.75L2.25 12Zm0 5.25v9m0-5.5h4");
}
</style><path class="x8k_9xbko"/>`,
		"fallback": "uix-sharp:side-road-sign",
	});
}

export default Component;

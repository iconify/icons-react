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
		"content": `<style>.uq69dubfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5s-7.5-7-7.5-12a7.5 7.5 0 0 1 15 0c0 5-7.5 12-7.5 12ZM12 6v4.5m0 3.25h.01");
}
</style><path class="uq69dubfo"/>`,
		"fallback": "uix-sharp:map-quest-marker",
	});
}

export default Component;

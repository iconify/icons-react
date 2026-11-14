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
		"content": `<style>.pderkkb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3.5c-2.5 0-2.5 2.5-2.5 5c0 2-1 3.5-2 3.5c1 0 2 1.5 2 3.5c0 2.5 0 5 2.5 5m6-17c2.5 0 2.5 2.5 2.5 5c0 2 1 3.5 2 3.5c-1 0-2 1.5-2 3.5c0 2.5 0 5-2.5 5M12 12h.01");
}
</style><path class="pderkkb9a"/>`,
		"fallback": "uix-sharp:set-notation",
	});
}

export default Component;

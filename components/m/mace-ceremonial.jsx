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
		"content": `<style>.kap_zgbvs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM4.5 19.5l8.75-8.75M9 12.25l3 3m6.75-10L20.5 3.5");
}
</style><path class="kap_zgbvs"/>`,
		"fallback": "uix-sharp:mace-ceremonial",
	});
}

export default Component;

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
		"content": `<style>.t_ytr0brd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h10v11H3Zm2 0V6.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V9m2 7l6-7.5M17.5 7l3 3m.5 3.5h.01m-2.01 3h.01");
}
</style><path class="t_ytr0brd"/>`,
		"fallback": "uix-sharp:watering-can-pouring",
	});
}

export default Component;

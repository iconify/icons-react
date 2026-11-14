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
		"content": `<style>.u_1kxsbwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3za2.5 2.5 0 0 1 2.5 2.5v1A2.5 2.5 0 0 1 12 9a2.5 2.5 0 0 1-2.5-2.5v-1A2.5 2.5 0 0 1 12 3m0 6v12.5m-3.5 0h7m.75-19a5.5 5.5 0 0 1 0 7");
}
</style><path class="u_1kxsbwq"/>`,
		"fallback": "uix:small-cell-pole",
	});
}

export default Component;

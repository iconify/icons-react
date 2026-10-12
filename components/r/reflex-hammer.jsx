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
		"content": `<style>.hg_spz4qj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 20.5l9.6-9.6m5.11 1.97l-.34.34q-1.24 1.24-2.48 0l-4.6-4.6q-1.24-1.24 0-2.48l.34-.34q1.24-1.24 2.48 0l4.6 4.6q1.24 1.24 0 2.48");
}
</style><path class="hg_spz4qj"/>`,
		"fallback": "iconoven:reflex-hammer",
	});
}

export default Component;

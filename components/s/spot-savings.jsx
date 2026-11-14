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
		"content": `<style>.olmzg42vc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 12.5l10-10m-11.5 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-2.5 5v6m-3-3l3 3l3-3");
}
</style><path class="olmzg42vc"/>`,
		"fallback": "uix:spot-savings",
	});
}

export default Component;

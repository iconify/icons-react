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
		"content": `<style>.k-ajyfttq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.725 2.75h4.55a1.75 1.75 0 0 1 1.238.513l3.224 3.224a1.75 1.75 0 0 1 .513 1.238v4.55a1.75 1.75 0 0 1-.513 1.238l-3.224 3.224a1.75 1.75 0 0 1-1.238.513h-4.55a1.75 1.75 0 0 1-1.238-.513l-3.224-3.224a1.75 1.75 0 0 1-.513-1.238v-4.55a1.75 1.75 0 0 1 .513-1.238l3.224-3.224a1.75 1.75 0 0 1 1.238-.513m7.775 16.5h6m-2.5-2.5l2.5 2.5l-2.5 2.5");
}
</style><path class="k-ajyfttq"/>`,
		"fallback": "uix:stop-go-penalty",
	});
}

export default Component;

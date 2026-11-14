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
		"content": `<style>.g10cejb5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0m-12.379 5h6.758a1.5 1.5 0 0 1 1.06.439l1.46 1.46a1.5 1.5 0 0 1-.04 2.16l-4.838 4.493a1.5 1.5 0 0 1-2.042 0l-4.838-4.493a1.5 1.5 0 0 1-.04-2.16l1.46-1.46a1.5 1.5 0 0 1 1.06-.439M5 14.5h14");
}
</style><path class="g10cejb5s"/>`,
		"fallback": "uix:jewellery-store",
	});
}

export default Component;

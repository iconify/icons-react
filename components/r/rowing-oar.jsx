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
		"content": `<style>.z6l0zbi5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 3.25L5.5 5.5m1 1l6.75 6.75m1.55.15l4.1 2.25q1.1.6 1.31 1.83l.33 2.04q.21 1.23-1.02 1.02l-2.04-.33q-1.23-.21-1.83-1.31l-2.25-4.1q-.6-1.1-.15-1.55t1.55.15");
}
</style><path class="z6l0zbi5f"/>`,
		"fallback": "iconoven:rowing-oar",
	});
}

export default Component;

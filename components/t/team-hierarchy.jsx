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
		"content": `<style>.etdg7rb0z {
  d: path("M3.5 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm13 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.n3w7eqpdn {
  d: path("M9.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-2 7.5c.25-1.4 2.1-2.25 4.5-2.25s4.25.85 4.5 2.25m-4.5 0V15m-6.5 2v-.5A1.5 1.5 0 0 1 7 15h10a1.5 1.5 0 0 1 1.5 1.5v.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n3w7eqpdn"/><path class="etdg7rb0z"/></g>`,
		"fallback": "uix-sharp:team-hierarchy",
	});
}

export default Component;

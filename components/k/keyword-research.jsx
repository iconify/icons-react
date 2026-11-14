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
		"content": `<style>.du_-j68np {
  d: path("M12.25 11.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM16.5 13l1.5 1.5");
}

.ksi3q0-1x {
  d: path("M3.5 6h17a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1ZM6 12h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ksi3q0-1x"/><path class="du_-j68np"/></g>`,
		"fallback": "uix-sharp:keyword-research",
	});
}

export default Component;

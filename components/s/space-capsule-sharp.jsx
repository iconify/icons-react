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
		"content": `<style>.c3oztzbgy {
  d: path("M4.25 18h15.5c-1.25 2-4.25 3.25-7.75 3.25S5.5 20 4.25 18Z");
}

.l1of_swxy {
  d: path("M10.75 3.25h3.75l.45 1.17l3.85 9.91l.45 1.17H4.75l.45-1.17l3.85-9.91l.45-1.17z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytopibb5c {
  cx: 12px;
  cy: 10px;
  r: 2px;
}
</style><g class="x2cwu0gfd"><path class="l1of_swxy"/><circle class="ytopibb5c"/><path class="c3oztzbgy"/></g>`,
		"fallback": "iconoven:space-capsule-sharp",
	});
}

export default Component;

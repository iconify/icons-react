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
		"content": `<style>.b9faz0kpo {
  d: path("M2.75 9.75h11.5v11.5H2.75z");
}

.c3v--mbkg {
  cx: 15.29px;
  cy: 5.6px;
  r: 1.25px;
}

.jcu4obbro {
  cx: 17.71px;
  cy: 4.2px;
  r: 1.25px;
}

.leai18bvc {
  d: path("m5.75 18.75l2.75-6.5l2.75 6.5m-4.3-2.25h3.1");
}

.na0elryoy {
  d: path("M15.4 9a3 1.75-30 0 1 5.2-3a3 1.75-30 0 1-5.2 3Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="b9faz0kpo"/><path class="leai18bvc"/><circle class="c3v--mbkg"/><circle class="jcu4obbro"/><path class="na0elryoy"/></g>`,
		"fallback": "iconoven:spelling-bee-sharp",
	});
}

export default Component;

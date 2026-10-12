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
		"content": `<style>.c6grrkemi {
  cx: 17px;
  cy: 18.75px;
  r: 2px;
}

.upgh8uo8y {
  cx: 7px;
  cy: 18.75px;
  r: 2px;
}

.wqrs8wbmy {
  d: path("M10 7.75h2.25l.21.45l.63 1.35l.21.45H9.5V7.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x6dqnobrm {
  d: path("M3.75 13.75h17.5v-3.5h-4.5L14.6 5.6l-.291-.861l-.909.011H6.5v5.5H2.75v3.5z");
}
</style><g class="x2cwu0gfd"><path class="x6dqnobrm"/><path class="wqrs8wbmy"/><circle class="upgh8uo8y"/><circle class="c6grrkemi"/></g>`,
		"fallback": "iconoven:toy-car-sharp",
	});
}

export default Component;

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
		"content": `<style>.dedomujev {
  d: path("M7.87 3.73L3.63 6.02l-.88.48l.4.92l.95 2.16l.4.92l.94-.35l.12-.05l.94-.35v11h11v-11l.94.35l.12.05l.94.35l.4-.92l.95-2.16l.4-.92l-.88-.48l-4.24-2.29l-.88-.48h-6.5z");
}

.gq64eebob {
  d: path("M9.25 3.5a2.75 2.5 0 0 0 5.5 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dedomujev"/><path class="gq64eebob"/></g>`,
		"fallback": "iconoven:t-shirt-sharp",
	});
}

export default Component;

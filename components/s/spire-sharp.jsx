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
		"content": `<style>.pnlsgxbav {
  d: path("M10.5 19.25V15.5h3v3.75");
}

.vf1nmycxw {
  d: path("M8 20.65v-8.9l.24-.55l3.52-7.9l.24-.55l.24.55l3.52 7.9l.24.55v9.5H8zM10.5 8.5h3M8 12.75h8");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vf1nmycxw"/><path class="pnlsgxbav"/></g>`,
		"fallback": "iconoven:spire-sharp",
	});
}

export default Component;

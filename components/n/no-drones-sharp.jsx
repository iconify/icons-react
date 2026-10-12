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
		"content": `<style>.o-c0s6bzg {
  cx: 6.5px;
  cy: 17.5px;
  r: 2.25px;
}

.t2lspobpz {
  d: path("M15.91 8.09L15 9m-6.91 6.91L9 15m3.18-6H15v2.82M11.82 15H9v-2.82M3.75 3.75l16.5 16.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zy82-wb5i {
  cx: 17.5px;
  cy: 6.5px;
  r: 2.25px;
}
</style><g class="x2cwu0gfd"><circle class="zy82-wb5i"/><circle class="o-c0s6bzg"/><path class="t2lspobpz"/></g>`,
		"fallback": "iconoven:no-drones-sharp",
	});
}

export default Component;

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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.so5vw_b3d {
  d: path("M12 6c2.75 2.5 4.25 4.75 4.25 7.25a4.25 4.25 0 0 1-8.5 0c0-1.75.75-3 2-4.25l.359 2.152l1.391.348c0-2.25.25-4 .5-5.5Zm-6.5-.5l13 13");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="so5vw_b3d"/></g>`,
		"fallback": "iconoven:no-fire-sharp",
	});
}

export default Component;

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
		"content": `<style>.vgya-4bom {
  d: path("M8.5 8h2.25v4.75h-3.5V8zm6 0h2.25v4.75h-3.5V8zm-9.75.75h-2m16.5 0h2M4.75 11.5h-2m16.5 0h2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zjmo4jglb {
  d: path("M7 5.5h12.25v9.75h-4.5l-.95 2.55l-.376.953l-1.024-.003h-.8l-1.024.003l-.376-.953l-.95-2.55h-4.5V5.5z");
}
</style><g class="x2cwu0gfd"><path class="zjmo4jglb"/><path class="vgya-4bom"/></g>`,
		"fallback": "iconoven:scuba-mask-sharp",
	});
}

export default Component;

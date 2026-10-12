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
		"content": `<style>.evw38bbza {
  d: path("M9 5V2.75M15 5V2.75M5.75 5h12.5v16.25H5.75zm0 3.75h12.5");
}

.oii93wb7p {
  d: path("M12 11.75c1.5 1.4 2.25 2.5 2.25 3.6a2.25 2.25 0 0 1-4.5 0c0-1.1.75-2.2 2.25-3.6Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="evw38bbza"/><path class="oii93wb7p"/></g>`,
		"fallback": "iconoven:water-heater-sharp",
	});
}

export default Component;

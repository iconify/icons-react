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
		"content": `<style>.al3d8cbli {
  d: path("M9 11L12 8L15 11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x9-n5osao {
  d: path("M3 15V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V15H3ZM6 3C4.34315 3 3 4.34315 3 6M21 6C21 4.34315 19.6569 3 18 3M3 10V11M21 10V11M10.5 3H13.5");
}
</style><g class="nrj6p8qat"><path class="x9-n5osao"/><path class="al3d8cbli"/></g>`,
		"fallback": "keyline-icons:panel-bottom-open-dashed",
	});
}

export default Component;

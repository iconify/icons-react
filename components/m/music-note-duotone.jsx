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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x9mxjjj0o {
  stroke-opacity: 0.4;
  d: path("M9 18L9 5L21 3L21 16");
}

.zii0zsbrt {
  fill: currentColor;
  d: path("M10 18C10 20.2091 8.2091 22 6 22C3.7909 22 2 20.2091 2 18C2 15.7909 3.7909 14 6 14C8.2091 14 10 15.7909 10 18ZM22 16C22 18.2091 20.2091 20 18 20C15.7909 20 14 18.2091 14 16C14 13.7909 15.7909 12 18 12C20.2091 12 22 13.7909 22 16Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="x9mxjjj0o"/><path class="zii0zsbrt"/></g>`,
		"fallback": "keyline-icons:music-note-duotone",
	});
}

export default Component;

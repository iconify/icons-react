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
		"content": `<style>.cjsg0ab2y {
  d: path("M2 20h20");
}

.mjsa21byd {
  d: path("M8 17V7l4 -4 4 4v10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ok9ioqb8x {
  d: path("M4 17h16");
}
</style><g class="nrj6p8qat"><path class="mjsa21byd"/><path class="ok9ioqb8x"/><path class="cjsg0ab2y"/></g>`,
		"fallback": "iconmind:landmark-outline-regular",
	});
}

export default Component;

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
		"content": `<style>.kodnftbvm {
  d: path("M3 9V6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V9H3ZM3 18C3 19.6569 4.34315 21 6 21M18 21C19.6569 21 21 19.6569 21 18M3 13V14M21 13V14M10.5 21H13.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ttdlueb2i {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 2H18C20.20914 2 22 3.79086 22 6V18C22 20.20914 20.20914 22 18 22H6C3.79086 22 2 20.20914 2 18V6C2 3.79086 3.79086 2 6 2ZM6 3C4.34315 3 3 4.34315 3 6V9H21V6C21 4.34315 19.65685 3 18 3Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="ttdlueb2i"/><path class="kodnftbvm"/></g>`,
		"fallback": "keyline-icons:panel-top-dashed-two-tone",
	});
}

export default Component;

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
		"content": `<style>.l-lxy3bml {
  d: path("M15 10.5q.39 2.86 3.25 3.25q-2.86.39-3.25 3.25q-.39-2.86-3.25-3.25q2.86-.39 3.25-3.25Z");
}

.x_qxwdbyi {
  d: path("M5.5 2.75h13.75v18.5l-.64-.4l-1.12-.7l-.64-.4l-.64.39l-1.17.72l-.64.39l-.64-.4l-1.12-.7l-.64-.4l-.64.4l-1.12.7l-.64.4l-.64-.39l-1.17-.72l-.64-.39l-.64.4l-1.12.7l-.64.4V2.75zM8 7h8m-8 3.5h3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="x_qxwdbyi"/><path class="l-lxy3bml"/></g>`,
		"fallback": "iconoven:invoice-ai-sharp",
	});
}

export default Component;

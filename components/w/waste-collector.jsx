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
		"content": `<style>.rad1anbsu {
  d: path("M16.5 16.5H9V7a2 2 0 0 1 2-2h5.5Zm0-7.5H19l2.5 3v4.5h-5M2.5 9h3.75l-.5 6.5H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z8kxi14ro {
  d: path("M10 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="rad1anbsu"/><path class="z8kxi14ro"/></g>`,
		"fallback": "uix-sharp:waste-collector",
	});
}

export default Component;

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
		"content": `<style>.cgrix0bpx {
  d: path("M7.5 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0ZM6 17.25a6 4.25 0 1 0 12 0a6 4.25 0 1 0-12 0Z");
}

.qfz1-rb1w {
  d: path("M5.75 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm9 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-4.5 3h.01m3.49 0h.01M12 9.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cgrix0bpx"/><path class="qfz1-rb1w"/></g>`,
		"fallback": "uix-sharp:toy-department",
	});
}

export default Component;

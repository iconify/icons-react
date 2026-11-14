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
		"content": `<style>.h35q2qaeh {
  d: path("M6 9a6 6 0 0 0 12 0m-6 6v6.5m-4.5 0L12 18l4.5 3.5");
}

.sbp37_d9j {
  d: path("M10 2.5h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sbp37_d9j"/><path class="h35q2qaeh"/></g>`,
		"fallback": "uix-sharp:microphone-stand",
	});
}

export default Component;

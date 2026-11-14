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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uvuajinzc {
  d: path("M12.072 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.931 0 1.814.108 2.625.311M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm8 11.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm2.25 0h.01m2.49 0h.01");
}

.x-6ru0kwl {
  d: path("M17.5 14.75c.25-1 1.5-1.25 2-.5");
}
</style><g class="ulnmmdpxh"><path class="uvuajinzc"/><path class="x-6ru0kwl"/></g>`,
		"fallback": "uix-sharp:midwife",
	});
}

export default Component;

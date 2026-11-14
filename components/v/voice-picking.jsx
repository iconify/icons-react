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
		"content": `<style>.dk73t_ter {
  d: path("M6 11a6 6 0 0 0 12 0m-6 6v3.5m-3.5 0h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vtwpckbvp {
  d: path("M10 3.5h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z");
}
</style><g class="ulnmmdpxh"><path class="vtwpckbvp"/><path class="dk73t_ter"/></g>`,
		"fallback": "uix-sharp:voice-picking",
	});
}

export default Component;

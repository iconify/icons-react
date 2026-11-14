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
		"content": `<style>.c48-t23mb {
  d: path("M5.25 10.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm3.25 0V7.25m6.25 2.5h4m-2-3.25v5.25m-2 2.25l6.75 4l-6.75 4Z");
}

.sgywqpigz {
  d: path("M11.9 17.5H2.5v-14h19v11.3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sgywqpigz"/><path class="c48-t23mb"/></g>`,
		"fallback": "uix-sharp:radio-tuner-play",
	});
}

export default Component;

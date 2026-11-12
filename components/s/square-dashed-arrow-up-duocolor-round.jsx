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
		"content": `<style>.elfn6foso {
  d: path("M3 6a3 3 0 0 1 3-3m12 0a3 3 0 0 1 3 3m0 12a3 3 0 0 1-3 3M6 21a3 3 0 0 1-3-3m7-15h4m7 7v4m-7 7h-4m-7-7v-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x-z7qobzv {
  stroke-opacity: 0.4;
  d: path("m15 11l-3-3l-3 3m3-3v8");
}
</style><g class="nrj6p8qat"><path class="x-z7qobzv"/><path class="elfn6foso"/></g>`,
		"fallback": "coolicons:square-dashed-arrow-up-duocolor-round",
	});
}

export default Component;

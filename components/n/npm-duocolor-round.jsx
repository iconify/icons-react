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
		"content": `<style>.kj6daq0ea {
  d: path("M14 21V10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o-zxycb7m {
  stroke-opacity: 0.4;
  d: path("M3 3h18v18H3Z");
}
</style><g class="nrj6p8qat"><path class="o-zxycb7m"/><path class="kj6daq0ea"/></g>`,
		"fallback": "coolicons:npm-duocolor-round",
	});
}

export default Component;

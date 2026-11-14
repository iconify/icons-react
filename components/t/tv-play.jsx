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
		"content": `<style>.a0b3vjb1g {
  d: path("M6.875 6.5h10.25a4.375 4.375 0 0 1 4.375 4.375v4.75A4.375 4.375 0 0 1 17.125 20H6.875A4.375 4.375 0 0 1 2.5 15.625v-4.75A4.375 4.375 0 0 1 6.875 6.5M8 2.5l4 4l4-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hw-vyvbrr {
  d: path("m12.75 11.875l.156.095a1.5 1.5 0 0 1 0 2.56l-.156.095a1.479 1.479 0 0 1-2.25-1.262v-.226a1.479 1.479 0 0 1 2.25-1.262");
}
</style><g class="hntgybcog"><path class="a0b3vjb1g"/><path class="hw-vyvbrr"/></g>`,
		"fallback": "uix:tv-play",
	});
}

export default Component;

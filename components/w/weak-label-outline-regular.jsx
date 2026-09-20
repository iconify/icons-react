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
		"content": `<style>.fe9c5cduf {
  d: path("M3 7h13l5 5 -5 5H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w8v40bcti {
  d: path("M6 10.5A2.5 2.5 0 1 1 8.5 13");
}

.yjqw0hqbw {
  d: path("M7.5 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="nrj6p8qat"><path class="fe9c5cduf"/><path class="w8v40bcti"/><path class="yjqw0hqbw"/></g>`,
		"fallback": "iconmind:weak-label-outline-regular",
	});
}

export default Component;

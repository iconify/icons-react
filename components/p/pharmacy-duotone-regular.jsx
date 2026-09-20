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
		"content": `<style>.l2wdis8zs {
  fill: currentColor;
  d: path("M3 11h18a9 9 0 0 1 -18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o77mms0ex {
  d: path("M3 11h18a9 9 0 0 1 -18 0");
}

.vr9ht74fa {
  d: path("m8 3 7 7");
}
</style><g class="nrj6p8qat"><path class="l2wdis8zs"/><path class="o77mms0ex"/><path class="vr9ht74fa"/></g>`,
		"fallback": "iconmind:pharmacy-duotone-regular",
	});
}

export default Component;

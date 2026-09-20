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
		"content": `<style>.axwkrzbmo {
  d: path("m8 8 4 4 -4 4 -4 -4Z");
}

.g_ig5r7qc {
  d: path("M17.12 9.88a3 3 0 0 1 0 4.24");
}

.hx3h6oiex {
  fill: currentColor;
  d: path("m8 8 4 4 -4 4 -4 -4Z");
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

.os75hg6rr {
  d: path("M19.24 7.76a6 6 0 0 1 0 8.5");
}
</style><g class="nrj6p8qat"><path class="hx3h6oiex"/><path class="axwkrzbmo"/><path class="g_ig5r7qc"/><path class="os75hg6rr"/></g>`,
		"fallback": "iconmind:model-voice-duotone-regular",
	});
}

export default Component;

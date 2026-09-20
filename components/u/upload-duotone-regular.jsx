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
		"content": `<style>.m8c8atiya {
  fill: currentColor;
  d: path("M4 15v4h16v-4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tla8vyn6c {
  d: path("M12 7v8");
}

.xp94cyt6z {
  d: path("m8 11 4 -4 4 4");
}
</style><g class="nrj6p8qat"><path class="m8c8atiya"/><path class="n0n63pb2v"/><path class="tla8vyn6c"/><path class="xp94cyt6z"/></g>`,
		"fallback": "iconmind:upload-duotone-regular",
	});
}

export default Component;

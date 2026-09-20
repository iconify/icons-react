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
		"content": `<style>.iv17tcb7u {
  d: path("M14 4.5A1.5 1.5 0 0 1 15.5 3 1.5 1.5 0 0 1 17 4.5v5a1.5 1.5 0 0 1 -1.5 1.5A1.5 1.5 0 0 1 14 9.5Z");
}

.le7pjtb_z {
  d: path("M7 4.5A1.5 1.5 0 0 1 8.5 3 1.5 1.5 0 0 1 10 4.5v5A1.5 1.5 0 0 1 8.5 11 1.5 1.5 0 0 1 7 9.5Z");
}

.litcbzkgt {
  fill: currentColor;
  d: path("M14 4.5A1.5 1.5 0 0 1 15.5 3 1.5 1.5 0 0 1 17 4.5v5a1.5 1.5 0 0 1 -1.5 1.5A1.5 1.5 0 0 1 14 9.5Z");
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

.osjmvib6z {
  d: path("M7 16a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.s80d-wbmo {
  fill: currentColor;
  d: path("M7 4.5A1.5 1.5 0 0 1 8.5 3 1.5 1.5 0 0 1 10 4.5v5A1.5 1.5 0 0 1 8.5 11 1.5 1.5 0 0 1 7 9.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xocy_1fwz {
  fill: currentColor;
  d: path("M7 16a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="xocy_1fwz"/><path class="s80d-wbmo"/><path class="litcbzkgt"/><path class="osjmvib6z"/><path class="le7pjtb_z"/><path class="iv17tcb7u"/></g>`,
		"fallback": "iconmind:rabbit-duotone-regular",
	});
}

export default Component;

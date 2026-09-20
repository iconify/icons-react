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
		"content": `<style>.nkayykbew {
  d: path("m3 19 7 -7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s9xdwbcyw {
  d: path("m3 5 7 7");
}

.uvhovrkef {
  d: path("M11.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}
</style><g class="nrj6p8qat"><path class="s9xdwbcyw"/><path class="nkayykbew"/><path class="uvhovrkef"/></g>`,
		"fallback": "iconmind:race-detect-outline-regular",
	});
}

export default Component;

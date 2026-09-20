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
		"content": `<style>.atyo14tkp {
  d: path("M8 8h8v5H8Z");
}

.go1co5b_o {
  d: path("M11 10.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qad3kqbgr {
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
}
</style><g class="nrj6p8qat"><path class="qad3kqbgr"/><path class="atyo14tkp"/><path class="go1co5b_o"/></g>`,
		"fallback": "iconmind:photo-spot-outline-regular",
	});
}

export default Component;

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
		"content": `<style>.c6jnv7x8o {
  d: path("M11 10h6");
}

.gf0s0mb8e {
  d: path("M6 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hgb-t7boy {
  d: path("M6 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o72p0hsyz {
  d: path("M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h4");
}

.ws9v8zbhe {
  d: path("M11 16h6");
}
</style><g class="nrj6p8qat"><path class="o72p0hsyz"/><path class="hgb-t7boy"/><path class="c6jnv7x8o"/><path class="gf0s0mb8e"/><path class="ws9v8zbhe"/></g>`,
		"fallback": "iconmind:tool-registry-outline-regular",
	});
}

export default Component;

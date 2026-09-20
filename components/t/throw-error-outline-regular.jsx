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
		"content": `<style>.bh4gsivfq {
  d: path("m13 9 2.5 -2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pdpzifbii {
  d: path("M17.5 8.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.pxmcfjbnu {
  d: path("M3 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.u552kxblg {
  d: path("M18.5 2.5V5");
}
</style><g class="nrj6p8qat"><path class="pxmcfjbnu"/><path class="bh4gsivfq"/><path class="u552kxblg"/><path class="pdpzifbii"/></g>`,
		"fallback": "iconmind:throw-error-outline-regular",
	});
}

export default Component;

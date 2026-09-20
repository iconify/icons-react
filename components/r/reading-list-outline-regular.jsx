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
		"content": `<style>.h2ryw2b8h {
  d: path("M13 13h7");
}

.hgmedzbsm {
  d: path("M13 9h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.szeqx6bdv {
  d: path("M13 17h5");
}

.zkld0ib7h {
  d: path("M4 6h6v10l-3 -3 -3 3Z");
}
</style><g class="nrj6p8qat"><path class="zkld0ib7h"/><path class="hgmedzbsm"/><path class="h2ryw2b8h"/><path class="szeqx6bdv"/></g>`,
		"fallback": "iconmind:reading-list-outline-regular",
	});
}

export default Component;

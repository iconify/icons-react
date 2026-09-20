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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.fgk90dbkb {
  fill: currentColor;
  d: path("m12 8 2 2 -2 2 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lulmb9b1a {
  d: path("M4 4h16v12H4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x7bkced7s {
  d: path("m12 8 2 2 -2 2 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="fgk90dbkb"/><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="x7bkced7s"/></g>`,
		"fallback": "iconmind:promo-banner-duotone-regular",
	});
}

export default Component;

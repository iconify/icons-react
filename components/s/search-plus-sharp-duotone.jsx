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
		"content": `<style>.bsdl90smb {
  d: path("M14.2929 14.2929L21.2929 21.2929M6 10L14 10M10 6L10 14");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.k79gm2b1n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18 10C18 14.4183 14.4183 18 10 18C5.5817 18 2 14.4183 2 10C2 5.5817 5.5817 2 10 2C14.4183 2 18 5.5817 18 10Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="k79gm2b1n"/><path class="bsdl90smb"/></g>`,
		"fallback": "keyline-icons:search-plus-sharp-duotone",
	});
}

export default Component;

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
		"content": `<style>.k79gm2b1n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18 10C18 14.4183 14.4183 18 10 18C5.5817 18 2 14.4183 2 10C2 5.5817 5.5817 2 10 2C14.4183 2 18 5.5817 18 10Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xtgv3ibid {
  d: path("M15 15L21 21M7.8787 7.8787L12.1213 12.1213M12.1213 7.8787L7.8787 12.1213");
}
</style><g class="nrj6p8qat"><path class="k79gm2b1n"/><path class="xtgv3ibid"/></g>`,
		"fallback": "keyline-icons:search-x-duotone",
	});
}

export default Component;

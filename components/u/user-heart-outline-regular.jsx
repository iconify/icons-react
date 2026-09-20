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
		"content": `<style>.jwef-yblo {
  d: path("M14.5 11a1.75 1.75 0 0 1 3.5 0 1.75 1.75 0 0 1 3.5 0L18 14.5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ppbx_abyw {
  d: path("M6 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.v-u0ijc7h {
  d: path("M3 21a6 6 0 0 1 12 0");
}
</style><g class="nrj6p8qat"><path class="ppbx_abyw"/><path class="v-u0ijc7h"/><path class="jwef-yblo"/></g>`,
		"fallback": "iconmind:user-heart-outline-regular",
	});
}

export default Component;

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
		"content": `<style>.cjsg0ab2y {
  d: path("M2 20h20");
}

.jszbb1ext {
  d: path("m2 18 8 -8 4 4 6 -6 2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ujgggmb5i {
  d: path("m7 13 3 -3 3 3");
}
</style><g class="nrj6p8qat"><path class="jszbb1ext"/><path class="ujgggmb5i"/><path class="cjsg0ab2y"/></g>`,
		"fallback": "iconmind:snow-mountain-outline-regular",
	});
}

export default Component;

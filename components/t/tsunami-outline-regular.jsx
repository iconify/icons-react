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
		"content": `<style>.av-slcbjo {
  d: path("M2 17a10 10 0 0 1 18 -6 5 5 0 0 0 -8 0");
}

.cjsg0ab2y {
  d: path("M2 20h20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="av-slcbjo"/><path class="cjsg0ab2y"/></g>`,
		"fallback": "iconmind:tsunami-outline-regular",
	});
}

export default Component;

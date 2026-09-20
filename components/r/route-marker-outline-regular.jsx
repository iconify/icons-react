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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t4jinwb2i {
  d: path("m9.5 8 2.5 2.5L14.5 8");
}

.tv0rskvbk {
  d: path("M6 3h12v9l-6 6 -6 -6Z");
}
</style><g class="nrj6p8qat"><path class="tv0rskvbk"/><path class="t4jinwb2i"/></g>`,
		"fallback": "iconmind:route-marker-outline-regular",
	});
}

export default Component;

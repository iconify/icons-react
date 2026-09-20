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
		"content": `<style>.fnwx1d-uu {
  d: path("m17 9.5 2.5 2.5 -2.5 2.5 -2.5 -2.5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vg-8fjbxt {
  d: path("M8 3.5 11.5 7 8 10.5 4.5 7Z");
}

.z1-oixbqj {
  d: path("m11 14 3 3 -3 3 -3 -3Z");
}
</style><g class="nrj6p8qat"><path class="vg-8fjbxt"/><path class="fnwx1d-uu"/><path class="z1-oixbqj"/></g>`,
		"fallback": "iconmind:night-stars-outline-regular",
	});
}

export default Component;

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
		"content": `<style>.fd4ngbb9a {
  d: path("m6 17 4 -4");
}

.fop9i_hvr {
  d: path("M19 4a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.j49v8ng1j {
  d: path("m14 9 4 -4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yhbbndf5c {
  d: path("M2 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zohykibek {
  d: path("M10 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="yhbbndf5c"/><path class="fd4ngbb9a"/><path class="zohykibek"/><path class="j49v8ng1j"/><path class="fop9i_hvr"/></g>`,
		"fallback": "iconmind:user-journey-outline-regular",
	});
}

export default Component;

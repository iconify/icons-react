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
		"content": `<style>.fs_osxb0l {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 12h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gtsw5xviq {
  d: path("M17 5v14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ocgq8oo_l {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oe2rn1bbo {
  d: path("M14 12h3");
}

.q6clf9bgd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M11.11 7.47a5 5 0 1 1 -4.22 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zqoml3bvy {
  d: path("M11.11 7.47a5 5 0 1 1 -4.22 0");
}
</style><g class="nrj6p8qat"><path class="q6clf9bgd"/><path class="fs_osxb0l"/><path class="ocgq8oo_l"/><path class="zqoml3bvy"/><path class="oe2rn1bbo"/><path class="gtsw5xviq"/></g>`,
		"fallback": "iconmind:leash-short-duotone-regular",
	});
}

export default Component;

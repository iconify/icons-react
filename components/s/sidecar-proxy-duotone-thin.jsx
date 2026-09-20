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
		"content": `<style>.eevgjgbxp {
  fill: currentColor;
  d: path("M15.5 10a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-2.5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.etqzyebuj {
  d: path("M13 12h2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kdq33ubui {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ra-gd-w0u {
  d: path("M5 9h5");
}

.ux97gqb3r {
  d: path("M2 6a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.v-t99u-wl {
  d: path("M15.5 10a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-2.5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="kdq33ubui"/><path class="eevgjgbxp"/><path class="ux97gqb3r"/><path class="v-t99u-wl"/><path class="etqzyebuj"/><path class="ra-gd-w0u"/></g>`,
		"fallback": "iconmind:sidecar-proxy-duotone-thin",
	});
}

export default Component;

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
		"content": `<style>.a2rsdhb4f {
  d: path("M12 14v3");
}

.af7iv3n-p {
  d: path("M12 2v2.5");
}

.ajxlkdb4q {
  d: path("M11 7.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.eucan1bre {
  d: path("M7 14v3");
}

.f5o_v9fiv {
  d: path("M17 14v3");
}

.hzizezb-w {
  fill: currentColor;
  d: path("M14 11h5a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3v-3l3 -3h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o89tku_be {
  fill: currentColor;
  d: path("M11 7.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.z70pbv_vu {
  d: path("M14 11h5a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3v-3l3 -3h5");
}
</style><g class="nrj6p8qat"><path class="hzizezb-w"/><path class="o89tku_be"/><path class="z70pbv_vu"/><path class="eucan1bre"/><path class="a2rsdhb4f"/><path class="f5o_v9fiv"/><path class="af7iv3n-p"/><path class="ajxlkdb4q"/></g>`,
		"fallback": "iconmind:vram-full-duotone-regular",
	});
}

export default Component;

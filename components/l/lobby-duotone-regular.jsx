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
		"content": `<style>.jj32ut8if {
  fill: currentColor;
  d: path("M3 6v11h18V6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m8djw6c8f {
  fill: currentColor;
  d: path("M13 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.qrdjxcbap {
  d: path("M3 6v11h18V6Z");
}

.xgscl2bdj {
  fill: currentColor;
  d: path("M6 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y_b-hlbjs {
  d: path("M13 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zirb-hbnv {
  d: path("M6 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="jj32ut8if"/><path class="xgscl2bdj"/><path class="m8djw6c8f"/><path class="qrdjxcbap"/><path class="zirb-hbnv"/><path class="y_b-hlbjs"/></g>`,
		"fallback": "iconmind:lobby-duotone-regular",
	});
}

export default Component;

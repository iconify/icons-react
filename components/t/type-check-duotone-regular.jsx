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
		"content": `<style>.atcmxjbma {
  d: path("M4 5h12");
}

.eaysgub_v {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10 5v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h6srt4n9a {
  d: path("m14 15 3 3 5 -5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p4idz7btn {
  d: path("M10 5v10");
}

.uykxl6bsn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 5h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z_smtp8xa {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14 15 3 3 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="uykxl6bsn"/><path class="eaysgub_v"/><path class="z_smtp8xa"/><path class="atcmxjbma"/><path class="p4idz7btn"/><path class="h6srt4n9a"/></g>`,
		"fallback": "iconmind:type-check-duotone-regular",
	});
}

export default Component;

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
		"content": `<style>.d7liw45th {
  d: path("m17 17 3 3");
}

.k9u7_xb8c {
  d: path("m8 17 -3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t6k3bm-ng {
  d: path("M13 17v4");
}

.vmb9_db5e {
  d: path("M14 3a7 7 0 1 0 0 12 5.5 5.5 0 0 1 0 -12");
}
</style><g class="nrj6p8qat"><path class="vmb9_db5e"/><path class="k9u7_xb8c"/><path class="t6k3bm-ng"/><path class="d7liw45th"/></g>`,
		"fallback": "iconmind:moonlight-outline-regular",
	});
}

export default Component;

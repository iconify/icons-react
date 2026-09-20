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
		"content": `<style>.j5ypi4ftw {
  d: path("M9 19h12");
}

.nl66y9men {
  d: path("M6 16h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qx663bcrf {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s-afh7gwn {
  d: path("M3 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="qx663bcrf"/><path class="s-afh7gwn"/><path class="nl66y9men"/><path class="j5ypi4ftw"/></g>`,
		"fallback": "iconmind:snapshot-volume-duotone-regular",
	});
}

export default Component;

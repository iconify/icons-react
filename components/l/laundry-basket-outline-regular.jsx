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
		"content": `<style>.f7hnb4ftm {
  d: path("M5 10v10h14V10Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.xmopbdc-t {
  d: path("M5 15h14");
}
</style><g class="nrj6p8qat"><path class="f7hnb4ftm"/><path class="xmopbdc-t"/><path class="xgrfb-bqu"/></g>`,
		"fallback": "iconmind:laundry-basket-outline-regular",
	});
}

export default Component;

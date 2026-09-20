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
		"content": `<style>.d8abqfbpc {
  d: path("M3 11h18");
}

.ehxfnqbrv {
  d: path("M3 17h15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rx4ch-ouz {
  d: path("M15.5 14.5 18 17l-2.5 2.5");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="nrj6p8qat"><path class="xgrfb-bqu"/><path class="d8abqfbpc"/><path class="ehxfnqbrv"/><path class="rx4ch-ouz"/></g>`,
		"fallback": "iconmind:ltr-outline-regular",
	});
}

export default Component;

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
		"content": `<style>.ga97lpb2d {
  d: path("M3 5h9v6l-4.5 4.5L3 11Z");
}

.hd5x_f8cb {
  d: path("m21 7 -4 4h3l-4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ga97lpb2d"/><path class="hd5x_f8cb"/></g>`,
		"fallback": "iconmind:threat-event-outline-regular",
	});
}

export default Component;

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
		"content": `<style>.epbcczbdi {
  d: path("M11 19H3V5h18v6M3 5l6 6h6l6-6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vxa2dmz6j {
  stroke-opacity: 0.4;
  d: path("m16 16l4 4m0-4l-4 4");
}
</style><g class="nrj6p8qat"><path class="vxa2dmz6j"/><path class="epbcczbdi"/></g>`,
		"fallback": "coolicons:mail-close-corner-duocolor-sharp",
	});
}

export default Component;

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

.rbjq20bia {
  stroke-opacity: 0.4;
  d: path("M16 16a2 2 0 1 1 2 2m0 3h.01");
}
</style><g class="nrj6p8qat"><path class="rbjq20bia"/><path class="epbcczbdi"/></g>`,
		"fallback": "coolicons:mail-help-corner-duocolor-sharp",
	});
}

export default Component;

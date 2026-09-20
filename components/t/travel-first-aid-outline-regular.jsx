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
		"content": `<style>.acx2mjbnt {
  d: path("M12 11v6");
}

.dbb3ymiyd {
  d: path("M9 7V4h6v3");
}

.ikiprn9sq {
  d: path("M9 14h6");
}

.inzib8bkh {
  d: path("M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="inzib8bkh"/><path class="dbb3ymiyd"/><path class="acx2mjbnt"/><path class="ikiprn9sq"/></g>`,
		"fallback": "iconmind:travel-first-aid-outline-regular",
	});
}

export default Component;

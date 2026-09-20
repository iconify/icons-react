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
		"content": `<style>.lezu57blc {
  d: path("M2 12h13");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pmhsn037r {
  d: path("M15 6a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.xbzn4ib3y {
  d: path("m5 9 -3 3 3 3");
}
</style><g class="nrj6p8qat"><path class="pmhsn037r"/><path class="lezu57blc"/><path class="xbzn4ib3y"/></g>`,
		"fallback": "iconmind:response-outline-regular",
	});
}

export default Component;

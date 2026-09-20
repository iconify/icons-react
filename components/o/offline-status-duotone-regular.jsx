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
		"content": `<style>.gcy62xbec {
  d: path("M6.5 16a4.5 4.5 0 0 1 9 0");
}

.n9-aiskbi {
  d: path("m17 20 4 -4");
}

.no0si0x2b {
  fill: currentColor;
  d: path("M17 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qpemshbvq {
  d: path("M8 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.qqsn8sb7q {
  d: path("M17 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.tdmbo5b2c {
  fill: currentColor;
  d: path("M8 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="tdmbo5b2c"/><path class="no0si0x2b"/><path class="qpemshbvq"/><path class="gcy62xbec"/><path class="qqsn8sb7q"/><path class="n9-aiskbi"/></g>`,
		"fallback": "iconmind:offline-status-duotone-regular",
	});
}

export default Component;

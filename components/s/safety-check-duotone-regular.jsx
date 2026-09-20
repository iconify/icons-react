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
		"content": `<style>.cjx7a2bdd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M20 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nn8cp7bvb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 12 2 2 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pd-i35blz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.ws1d0fbts {
  d: path("M20 4v16");
}

.ylnxs8amf {
  d: path("m8 12 2 2 6 -6");
}
</style><g class="nrj6p8qat"><path class="pd-i35blz"/><path class="cjx7a2bdd"/><path class="nn8cp7bvb"/><path class="r3faxubne"/><path class="ws1d0fbts"/><path class="ylnxs8amf"/></g>`,
		"fallback": "iconmind:safety-check-duotone-regular",
	});
}

export default Component;

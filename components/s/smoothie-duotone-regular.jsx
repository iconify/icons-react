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
		"content": `<style>.f3o3tmbkd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 8v12h8V8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h8pc3gbcq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 8a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kgr6yibsx {
  d: path("M8 8v12h8V8");
}

.kurig99-x {
  d: path("m14 6 4 -4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.otxw5dbct {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14 6 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qu18jzmnr {
  d: path("M8 8a4 4 0 0 1 8 0");
}
</style><g class="nrj6p8qat"><path class="f3o3tmbkd"/><path class="h8pc3gbcq"/><path class="otxw5dbct"/><path class="kgr6yibsx"/><path class="qu18jzmnr"/><path class="kurig99-x"/></g>`,
		"fallback": "iconmind:smoothie-duotone-regular",
	});
}

export default Component;

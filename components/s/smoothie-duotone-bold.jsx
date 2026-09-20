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
		"content": `<style>.ab2bllbak {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 8a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kgr6yibsx {
  d: path("M8 8v12h8V8");
}

.kurig99-x {
  d: path("m14 6 4 -4");
}

.mj6n4crmc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m14 6 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qu18jzmnr {
  d: path("M8 8a4 4 0 0 1 8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.utsjhv8mh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 8v12h8V8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="utsjhv8mh"/><path class="ab2bllbak"/><path class="mj6n4crmc"/><path class="kgr6yibsx"/><path class="qu18jzmnr"/><path class="kurig99-x"/></g>`,
		"fallback": "iconmind:smoothie-duotone-bold",
	});
}

export default Component;

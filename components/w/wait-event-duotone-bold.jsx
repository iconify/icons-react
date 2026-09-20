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
		"content": `<style>.f8e_ateex {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m19 6 -4.5 4.5H17L12.5 15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l4a5a5bci {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.naa67qbfw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p8kjos25u {
  d: path("m19 6 -4.5 4.5H17L12.5 15");
}

.ppivcbbzp {
  d: path("M5 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t87ohzbeq {
  d: path("M9 4v16");
}
</style><g class="s0phu2bbs"><path class="naa67qbfw"/><path class="l4a5a5bci"/><path class="f8e_ateex"/><path class="ppivcbbzp"/><path class="t87ohzbeq"/><path class="p8kjos25u"/></g>`,
		"fallback": "iconmind:wait-event-duotone-bold",
	});
}

export default Component;

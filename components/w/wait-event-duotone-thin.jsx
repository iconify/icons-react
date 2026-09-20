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
		"content": `<style>.dm_i-9bje {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m19 6 -4.5 4.5H17L12.5 15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nrmo-yb4e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o_5zgdb_v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p8kjos25u {
  d: path("m19 6 -4.5 4.5H17L12.5 15");
}

.ppivcbbzp {
  d: path("M5 4v16");
}

.t87ohzbeq {
  d: path("M9 4v16");
}
</style><g class="hntgybcog"><path class="nrmo-yb4e"/><path class="o_5zgdb_v"/><path class="dm_i-9bje"/><path class="ppivcbbzp"/><path class="t87ohzbeq"/><path class="p8kjos25u"/></g>`,
		"fallback": "iconmind:wait-event-duotone-thin",
	});
}

export default Component;

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
		"content": `<style>.dzijgfbaz {
  fill: currentColor;
  d: path("M16 6h5v5h-5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ia8_hqb_h {
  d: path("m9 14 5 5H4Z");
}

.kxpwvtbvr {
  fill: currentColor;
  d: path("m9 14 5 5H4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ss_efzbzj {
  d: path("M16 6h5v5h-5Z");
}

.ubqbpfbgm {
  d: path("m3 8 6 6h12");
}
</style><g class="s0phu2bbs"><path class="kxpwvtbvr"/><path class="dzijgfbaz"/><path class="ubqbpfbgm"/><path class="ia8_hqb_h"/><path class="ss_efzbzj"/></g>`,
		"fallback": "iconmind:lever-duotone-bold",
	});
}

export default Component;

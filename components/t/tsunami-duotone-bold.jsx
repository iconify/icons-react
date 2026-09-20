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
		"content": `<style>.av-slcbjo {
  d: path("M2 17a10 10 0 0 1 18 -6 5 5 0 0 0 -8 0");
}

.cjsg0ab2y {
  d: path("M2 20h20");
}

.g91uwsb-i {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 20h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u6_b2ld-z {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 17a10 10 0 0 1 18 -6 5 5 0 0 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="u6_b2ld-z"/><path class="g91uwsb-i"/><path class="av-slcbjo"/><path class="cjsg0ab2y"/></g>`,
		"fallback": "iconmind:tsunami-duotone-bold",
	});
}

export default Component;

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
		"content": `<style>.h949zhbdz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m5 14 6 -6h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hehuylblo {
  d: path("m16 5 3 3 -3 3");
}

.its1e1bwq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jd4p1lf8b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m16 5 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ppivcbbzp {
  d: path("M5 4v16");
}

.x3k3riida {
  d: path("m5 14 6 -6h8");
}
</style><g class="nrj6p8qat"><path class="its1e1bwq"/><path class="h949zhbdz"/><path class="jd4p1lf8b"/><path class="ppivcbbzp"/><path class="x3k3riida"/><path class="hehuylblo"/></g>`,
		"fallback": "iconmind:rebase-duotone-regular",
	});
}

export default Component;

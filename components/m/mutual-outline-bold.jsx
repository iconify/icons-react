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
		"content": `<style>.h9o82-b1h {
  d: path("M15 16a3 3 0 0 1 6 0");
}

.j4_olc1js {
  d: path("M10 14h4");
}

.oio7uh0en {
  d: path("M10 11h4");
}

.oumlmtbql {
  d: path("M16 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.quv6fgbpo {
  d: path("M4 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w6zsztb2w {
  d: path("M3 16a3 3 0 0 1 6 0");
}
</style><g class="s0phu2bbs"><path class="quv6fgbpo"/><path class="w6zsztb2w"/><path class="oumlmtbql"/><path class="h9o82-b1h"/><path class="oio7uh0en"/><path class="j4_olc1js"/></g>`,
		"fallback": "iconmind:mutual-outline-bold",
	});
}

export default Component;

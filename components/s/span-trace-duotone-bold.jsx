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
		"content": `<style>.cmdo5slre {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 17h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dbp9eobfb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 7h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h50arts9k {
  d: path("M6 12h10");
}

.p7nia1b6j {
  d: path("M3 7h16");
}

.qn-opib9b {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x3jqftbaj {
  d: path("M9 17h12");
}
</style><g class="s0phu2bbs"><path class="dbp9eobfb"/><path class="qn-opib9b"/><path class="cmdo5slre"/><path class="p7nia1b6j"/><path class="h50arts9k"/><path class="x3jqftbaj"/></g>`,
		"fallback": "iconmind:span-trace-duotone-bold",
	});
}

export default Component;

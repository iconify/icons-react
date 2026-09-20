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
		"content": `<style>.c-iufdcsb {
  fill: currentColor;
  d: path("m12 4 6 6 -6 6 -6 -6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fmlaifbpn {
  d: path("M12 16v4");
}

.gnn1wob3e {
  d: path("M18 10h3");
}

.navc76bal {
  d: path("m12 4 6 6 -6 6 -6 -6Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.umugi_b9i {
  d: path("M3 10h3");
}
</style><g class="s0phu2bbs"><path class="c-iufdcsb"/><path class="navc76bal"/><path class="gnn1wob3e"/><path class="umugi_b9i"/><path class="fmlaifbpn"/></g>`,
		"fallback": "iconmind:switch-case-duotone-bold",
	});
}

export default Component;

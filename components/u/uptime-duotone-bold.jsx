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
		"content": `<style>.cgfzc3bbu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 17h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k187sabpz {
  d: path("M2 11h20");
}

.o0r0bcbwx {
  d: path("m16 6 2 2 4 -4");
}

.o18dzib_c {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 6 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pdgwdvrql {
  d: path("M15 17h7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t-b4thfkb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15 17h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y1nfwg_iv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 11h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yaok4e85l {
  d: path("M2 17h9");
}
</style><g class="s0phu2bbs"><path class="y1nfwg_iv"/><path class="cgfzc3bbu"/><path class="t-b4thfkb"/><path class="o18dzib_c"/><path class="k187sabpz"/><path class="yaok4e85l"/><path class="pdgwdvrql"/><path class="o0r0bcbwx"/></g>`,
		"fallback": "iconmind:uptime-duotone-bold",
	});
}

export default Component;

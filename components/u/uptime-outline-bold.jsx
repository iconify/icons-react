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
		"content": `<style>.k187sabpz {
  d: path("M2 11h20");
}

.o0r0bcbwx {
  d: path("m16 6 2 2 4 -4");
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

.yaok4e85l {
  d: path("M2 17h9");
}
</style><g class="s0phu2bbs"><path class="k187sabpz"/><path class="yaok4e85l"/><path class="pdgwdvrql"/><path class="o0r0bcbwx"/></g>`,
		"fallback": "iconmind:uptime-outline-bold",
	});
}

export default Component;

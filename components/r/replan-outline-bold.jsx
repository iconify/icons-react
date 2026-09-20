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
		"content": `<style>.feqdbpj9t {
  d: path("m3 17 6 -6");
}

.is1bv_axc {
  d: path("M2 6a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.on73k30pq {
  d: path("M16 9h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tc8fh3off {
  d: path("M14 6a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.x5tg-9bgp {
  d: path("M16 13h4");
}
</style><g class="s0phu2bbs"><path class="is1bv_axc"/><path class="feqdbpj9t"/><path class="tc8fh3off"/><path class="on73k30pq"/><path class="x5tg-9bgp"/></g>`,
		"fallback": "iconmind:replan-outline-bold",
	});
}

export default Component;

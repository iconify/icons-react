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
		"content": `<style>.ejtyvbbdg {
  d: path("M17 15v4");
}

.ic_pehd5a {
  d: path("M3 17h18");
}

.ofzwylwbi {
  d: path("M7 15v4");
}

.qzpg-bc7o {
  d: path("m12 6 2 2a2.8 2.8 0 1 1 -4 0Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yoftwf7ei {
  d: path("M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9");
}
</style><g class="s0phu2bbs"><path class="yoftwf7ei"/><path class="qzpg-bc7o"/><path class="ic_pehd5a"/><path class="ofzwylwbi"/><path class="ejtyvbbdg"/></g>`,
		"fallback": "iconmind:water-meter-outline-bold",
	});
}

export default Component;

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
		"content": `<style>.dvobmj5db {
  d: path("M14 20a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.otd842a5m {
  d: path("m9.5 10.5 5 -5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x6ykmmben {
  d: path("m9.5 13.5 5 5");
}

.x8ux9pb9v {
  d: path("M14 4a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zirb-hbnv {
  d: path("M6 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="zirb-hbnv"/><path class="x8ux9pb9v"/><path class="dvobmj5db"/><path class="otd842a5m"/><path class="x6ykmmben"/></g>`,
		"fallback": "iconmind:share-outline-bold",
	});
}

export default Component;

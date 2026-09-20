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
		"content": `<style>.caex5f61w {
  d: path("M2 4a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.jbe31sfeo {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.o_xaqvc9z {
  fill: currentColor;
  d: path("M9 11a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-9a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wxzzcdhsa {
  d: path("M9 11a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-9a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="jbe31sfeo"/><path class="o_xaqvc9z"/><path class="caex5f61w"/><path class="wxzzcdhsa"/></g>`,
		"fallback": "iconmind:overlap-duotone-bold",
	});
}

export default Component;

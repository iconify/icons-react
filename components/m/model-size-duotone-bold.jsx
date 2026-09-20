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
		"content": `<style>.i3nsbzblu {
  d: path("m10 3 7 7 -7 7 -7 -7Z");
}

.rg7tj2b_x {
  d: path("m18 14 3.5 3.5L18 21l-3.5 -3.5Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tl2b-zblk {
  fill: currentColor;
  d: path("m18 14 3.5 3.5L18 21l-3.5 -3.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ugww-4jxa {
  fill: currentColor;
  d: path("m10 3 7 7 -7 7 -7 -7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="ugww-4jxa"/><path class="tl2b-zblk"/><path class="i3nsbzblu"/><path class="rg7tj2b_x"/></g>`,
		"fallback": "iconmind:model-size-duotone-bold",
	});
}

export default Component;

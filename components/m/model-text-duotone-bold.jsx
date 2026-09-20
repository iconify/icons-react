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
		"content": `<style>.ltxni2ncy {
  d: path("M14 12h7");
}

.p39ktbcba {
  d: path("m7 8 4 4 -4 4 -4 -4Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vg0qlegui {
  d: path("M14 17h7");
}

.w2ed1xbxm {
  fill: currentColor;
  d: path("m7 8 4 4 -4 4 -4 -4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xrit8bb9e {
  d: path("M14 7h7");
}
</style><g class="s0phu2bbs"><path class="w2ed1xbxm"/><path class="p39ktbcba"/><path class="xrit8bb9e"/><path class="ltxni2ncy"/><path class="vg0qlegui"/></g>`,
		"fallback": "iconmind:model-text-duotone-bold",
	});
}

export default Component;

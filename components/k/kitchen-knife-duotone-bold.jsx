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
		"content": `<style>.e69i7fcek {
  d: path("M17 12h5");
}

.qv06t9afb {
  fill: currentColor;
  d: path("M3 17h14V7h-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rbdg4rb5l {
  d: path("M3 17h14V7h-4Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="qv06t9afb"/><path class="rbdg4rb5l"/><path class="e69i7fcek"/></g>`,
		"fallback": "iconmind:kitchen-knife-duotone-bold",
	});
}

export default Component;

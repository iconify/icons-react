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
		"content": `<style>.gvyocnxfx {
  fill: currentColor;
  d: path("M3 12a3 3 0 0 1 3 -3h7a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.i4kf51esh {
  d: path("M19 5v14");
}

.lokgnabwi {
  d: path("M3 12a3 3 0 0 1 3 -3h7a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="gvyocnxfx"/><path class="lokgnabwi"/><path class="i4kf51esh"/></g>`,
		"fallback": "iconmind:token-limit-duotone-bold",
	});
}

export default Component;

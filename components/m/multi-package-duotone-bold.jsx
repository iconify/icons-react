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
		"content": `<style>.cc3l45wyt {
  d: path("M12 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2Z");
}

.rv_spwblc {
  fill: currentColor;
  d: path("M12 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2Z");
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

.vch9hc4be {
  d: path("M2 4a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.vmeffnbkw {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="vmeffnbkw"/><path class="rv_spwblc"/><path class="vch9hc4be"/><path class="cc3l45wyt"/></g>`,
		"fallback": "iconmind:multi-package-duotone-bold",
	});
}

export default Component;

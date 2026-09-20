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
		"content": `<style>.d5b4fcc2f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 19h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fqun5mb0v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 14a9 9 0 0 1 16 -5 4.5 4.5 0 0 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w6w8km5nw {
  d: path("M3 14a9 9 0 0 1 16 -5 4.5 4.5 0 0 0 -7 0");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="s0phu2bbs"><path class="fqun5mb0v"/><path class="d5b4fcc2f"/><path class="w6w8km5nw"/><path class="z9ittvbis"/></g>`,
		"fallback": "iconmind:wave-duotone-bold",
	});
}

export default Component;

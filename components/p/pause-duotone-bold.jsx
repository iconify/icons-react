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
		"content": `<style>.l4a5a5bci {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s7eyaw7qq {
  d: path("M15 4v16");
}

.t87ohzbeq {
  d: path("M9 4v16");
}

.vtfm0dbjp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="l4a5a5bci"/><path class="vtfm0dbjp"/><path class="t87ohzbeq"/><path class="s7eyaw7qq"/></g>`,
		"fallback": "iconmind:pause-duotone-bold",
	});
}

export default Component;

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
		"content": `<style>.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t03dwshwl {
  d: path("M7 11v6l3 3h4l3 -3v-6");
}

.ywohddcxs {
  d: path("M12 2.5 15.5 6a3.5 3.5 0 1 1 -7 0Z");
}
</style><g class="s0phu2bbs"><path class="t03dwshwl"/><path class="ywohddcxs"/></g>`,
		"fallback": "iconmind:water-intake-outline-bold",
	});
}

export default Component;

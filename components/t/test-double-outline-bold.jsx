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
		"content": `<style>.q71ix4yfi {
  d: path("m4 5 7 7 -7 7Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.um-4xc65y {
  d: path("m12 5 7 7 -7 7");
}
</style><g class="s0phu2bbs"><path class="q71ix4yfi"/><path class="um-4xc65y"/></g>`,
		"fallback": "iconmind:test-double-outline-bold",
	});
}

export default Component;

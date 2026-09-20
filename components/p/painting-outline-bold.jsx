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
		"content": `<style>.bvxg1_b9x {
  d: path("m18 6 4 4 -2 2 -4 -4Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x7x2dubhn {
  d: path("M3 4v12h12V4Z");
}

.yl6rclbxh {
  d: path("m13 15 7 -7");
}
</style><g class="s0phu2bbs"><path class="x7x2dubhn"/><path class="yl6rclbxh"/><path class="bvxg1_b9x"/></g>`,
		"fallback": "iconmind:painting-outline-bold",
	});
}

export default Component;

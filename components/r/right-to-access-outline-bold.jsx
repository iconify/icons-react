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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.or_n_9b8r {
  d: path("M9 12.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zh6w8c3yc {
  d: path("m11.5 13 3.5 3.5");
}
</style><g class="s0phu2bbs"><path class="bn_pu6j-z"/><path class="or_n_9b8r"/><path class="zh6w8c3yc"/></g>`,
		"fallback": "iconmind:right-to-access-outline-bold",
	});
}

export default Component;

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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.nzwwf5-_s {
  d: path("m6 5 6 6 3 3h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wy8w_b5cr {
  d: path("M4 21h18");
}
</style><g class="s0phu2bbs"><path class="crv4i00bu"/><path class="wy8w_b5cr"/><path class="nzwwf5-_s"/></g>`,
		"fallback": "iconmind:loss-outline-bold",
	});
}

export default Component;

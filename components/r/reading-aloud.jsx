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
		"content": `<style>.b6a_6hp0d {
  d: path("M19.277 5.894a9.5 9.5 0 0 1 0 12.212");
}

.gbn2rwbgc {
  d: path("M12 6.5c-2-1.5-4.75-2-9.5-2V18c4.75 0 7.5.5 9.5 2c2-1.5 4.75-2 9.5-2V4.5c-4.75 0-7.5.5-9.5 2m0 0V20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gbn2rwbgc"/><path class="b6a_6hp0d"/></g>`,
		"fallback": "uix:reading-aloud",
	});
}

export default Component;

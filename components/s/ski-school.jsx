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
		"content": `<style>.rpf5c_bpp {
  d: path("M16 17.25v2.5q2 1.5 4 0v-2.5");
}

.rr5o8luwc {
  d: path("m3.5 19l13-13q1.25-1.25 2.75-1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xzlaqrbll {
  d: path("M14.101 14.101L6 6Q4.75 4.75 3.25 5M15 16.75l3-1.5l3 1.5l-3 1.5Z");
}
</style><g class="ulnmmdpxh"><path class="rr5o8luwc"/><path class="xzlaqrbll"/><path class="rpf5c_bpp"/></g>`,
		"fallback": "uix-sharp:ski-school",
	});
}

export default Component;

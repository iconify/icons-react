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
		"content": `<style>.blp_zbb6h {
  d: path("M15.75 2.75h3.5l-3.5 3.5h3.5M2.75 12c0-2 1.5-3.5 3.75-3.5h11c2.25 0 3.75 1.5 3.75 3.5v.5c0 3-2.1 5-4.75 5c-2 0-3.1-1.5-4.5-1.5s-2.5 1.5-4.5 1.5c-2.65 0-4.75-2-4.75-5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lrfmhcckg {
  d: path("M5.75 12.5c1.1.9 2.65.9 3.75 0m5 0c1.1.9 2.65.9 3.75 0");
}
</style><g class="hntgybcog"><path class="blp_zbb6h"/><path class="lrfmhcckg"/></g>`,
		"fallback": "iconoven:sleep-mask",
	});
}

export default Component;

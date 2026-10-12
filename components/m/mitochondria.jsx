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
		"content": `<style>.ctmv3hbde {
  d: path("M3 12c0-3.25 2.5-5.5 6-5.5c1.5 0 2.25.75 3 .75s1.5-.75 3-.75c3.5 0 6.25 2.25 6.25 5.5S17.5 17.5 12 17.5S3 15.25 3 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.twc8jcbyw {
  d: path("M5.75 12C7 9.5 8.25 9.5 9 12s2 2.5 3.25 0s2-2.5 3.25 0s2 2.5 3.25 0");
}
</style><g class="hntgybcog"><path class="ctmv3hbde"/><path class="twc8jcbyw"/></g>`,
		"fallback": "iconoven:mitochondria",
	});
}

export default Component;

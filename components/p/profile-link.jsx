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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ppt0w27dn {
  d: path("M4 20.25h11a.75.75 0 0 0 .75-.75c0-3-2.8-5.25-6.25-5.25S3.25 16.5 3.25 19.5a.75.75 0 0 0 .75.75m12.5-11v-1.5a1.75 1.75 0 0 1 3.5 0v1.5m0 3v1.5a1.75 1.75 0 0 1-3.5 0v-1.5m1.75-3.75V13");
}

.rknchmb5r {
  cx: 9.5px;
  cy: 7.75px;
  r: 3.75px;
}
</style><g class="hntgybcog"><circle class="rknchmb5r"/><path class="ppt0w27dn"/></g>`,
		"fallback": "iconoven:profile-link",
	});
}

export default Component;

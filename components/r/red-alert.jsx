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
		"content": `<style>.eh1l1eybj {
  d: path("M6.5 17.5v-5a5.5 5.5 0 0 1 11 0v5M4 17.5h16V21H4Zm8-15V4M4 5l1.25 1.25M20 5l-1.25 1.25");
}

.fps3alwnn {
  d: path("M9.5 13.5v-1.25a2.5 2.5 0 0 1 2.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eh1l1eybj"/><path class="fps3alwnn"/></g>`,
		"fallback": "uix-sharp:red-alert",
	});
}

export default Component;

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
		"content": `<style>.rfrpknb0i {
  d: path("M3.5 10.5a5 5 0 0 0 10.5 0m-5.25 5V20m-3 0h6M15 17h6v4.5h-6Zm1.25 0v-1.25a1.75 1.75 0 0 1 3.5 0V17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yajh00b_b {
  d: path("M6 3h5.5v10H6Z");
}
</style><g class="ulnmmdpxh"><path class="yajh00b_b"/><path class="rfrpknb0i"/></g>`,
		"fallback": "uix-sharp:mic-privacy",
	});
}

export default Component;

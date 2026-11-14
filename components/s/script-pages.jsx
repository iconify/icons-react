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
		"content": `<style>.g_6tshbvk {
  d: path("M3.5 5.5H17v16H3.5Z");
}

.rxpm5ub7n {
  d: path("M6.5 2.5h12a2 2 0 0 1 2 2v14m-14-9H14m-5.5 4H14m-5.5 4h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g_6tshbvk"/><path class="rxpm5ub7n"/></g>`,
		"fallback": "uix-sharp:script-pages",
	});
}

export default Component;

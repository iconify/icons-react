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
		"content": `<style>.aa-dyjbmm {
  d: path("M8.5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM12 8h.01");
}

.uerxt6beh {
  d: path("M3.5 20.5v-16h17v16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uerxt6beh"/><path class="aa-dyjbmm"/></g>`,
		"fallback": "uix-sharp:soccer-crossbar",
	});
}

export default Component;

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
		"content": `<style>.qthg35b5f {
  d: path("M2.5 4.5h19v15h-19Zm6.5 3h6");
}

.s8u8fxb-h {
  d: path("M9.25 14a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM12 14v-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qthg35b5f"/><path class="s8u8fxb-h"/></g>`,
		"fallback": "uix-sharp:monitor-controller",
	});
}

export default Component;

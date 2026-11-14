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
		"content": `<style>.e1j4smtka {
  d: path("M10.5 7.5V10a1 1 0 0 0 1 1H15a1 1 0 0 0 1-1V7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uyf9cojxg {
  d: path("M7.5 7.5H17l3.5 3.5v9.5h-13Z");
}

.vi2bfob1d {
  d: path("M4 16.5v-11a2 2 0 0 1 2-2h9");
}
</style><g class="ulnmmdpxh"><path class="uyf9cojxg"/><path class="vi2bfob1d"/><path class="e1j4smtka"/></g>`,
		"fallback": "uix-sharp:save-all",
	});
}

export default Component;

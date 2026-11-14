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
		"content": `<style>.o4x-zoiyb {
  d: path("M12 4.5a8.5 8.5 0 1 1-7.361 4.25");
}

.tcm31ncqs {
  d: path("M8.5 12h7v5.5h-7Zm1.5 0v-1.25a2 2 0 0 1 4 0V12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.upewqvbrp {
  d: path("m15 2l-3 2.5L15 7m-3 7.75h.01");
}
</style><g class="ulnmmdpxh"><path class="tcm31ncqs"/><path class="o4x-zoiyb"/><path class="upewqvbrp"/></g>`,
		"fallback": "uix-sharp:lock-reset",
	});
}

export default Component;

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
		"content": `<style>.g42so_qbo {
  d: path("M12.2 17.5H2.5v-15h15v9.8");
}

.i_kztccbj {
  fill: currentColor;
  d: path("M2.5 15L15 2.5H5A2.5 2.5 0 0 0 2.5 5Z");
}

.owmq7cc8t {
  d: path("M15 16.25h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g42so_qbo"/><path class="i_kztccbj"/><path class="owmq7cc8t"/></g>`,
		"fallback": "uix-sharp:mask-invert",
	});
}

export default Component;

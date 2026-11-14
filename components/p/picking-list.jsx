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
		"content": `<style>.kfqebjbah {
  d: path("M4.5 3.5h15v17h-15Z");
}

.o2l9w1_cd {
  d: path("M8 8.5L9.5 10L12 7m-4 7l1.5 1.5l2.5-3M14 9h2m-2 5.5h2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kfqebjbah"/><path class="o2l9w1_cd"/></g>`,
		"fallback": "uix-sharp:picking-list",
	});
}

export default Component;

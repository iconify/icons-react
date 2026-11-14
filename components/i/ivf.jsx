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
		"content": `<style>.bqfw0kbvi {
  d: path("M2.5 16.25a8.5 3 0 1 0 17 0a8.5 3 0 1 0-17 0Z");
}

.c8ulaubzh {
  d: path("M2.5 16.25V18c0 2 3.75 3.5 8.5 3.5s8.5-1.5 8.5-3.5v-1.75");
}

.n7f_rk_vr {
  d: path("M8.75 16.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm4-4.25L17 6.75m1.047-4.938l2.298 1.929l-2.892 3.447l-2.298-1.929Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bqfw0kbvi"/><path class="c8ulaubzh"/><path class="n7f_rk_vr"/></g>`,
		"fallback": "uix-sharp:ivf",
	});
}

export default Component;

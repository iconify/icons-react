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
		"content": `<style>.e0ks12rbk {
  d: path("M3.5 7.5L12 12l8.5-4.5M12 12v4.8m0 2.4V21M3.5 9h17M9 9v11.5m5.75-2.5l2 2L21 15.75");
}

.o15l1_b6i {
  d: path("M13.196 20.367L12 21l-8.5-4.5v-9L12 3l8.5 4.5v4.765");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o15l1_b6i"/><path class="e0ks12rbk"/></g>`,
		"fallback": "uix-sharp:layout-check",
	});
}

export default Component;

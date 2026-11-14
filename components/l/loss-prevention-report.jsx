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
		"content": `<style>.p5_1mbb_d {
  d: path("M12.7 21.5H4.5v-19h15v9.1M8 7h8m-8 3.5h8M8 14h3.5");
}

.rjy7cgbpi {
  d: path("m18 14l3.5 1.25V18c0 2-1.5 3.25-3.5 4c-2-.75-3.5-2-3.5-4v-2.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p5_1mbb_d"/><path class="rjy7cgbpi"/></g>`,
		"fallback": "uix-sharp:loss-prevention-report",
	});
}

export default Component;

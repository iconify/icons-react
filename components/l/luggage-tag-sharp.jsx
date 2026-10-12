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
		"content": `<style>.m9me6bb5j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 9.5h.01");
}

.o_peh6bae {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.18 5.67l3.39 2.66l1.18.92v12H6.25v-12l1.18-.92l3.39-2.66L12 4.75z");
}

.un-laqb0a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.5c-1.5-3.5-3.5-6-7.5-6.75M9.25 14h5.5m-5.5 3.25h3.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="o_peh6bae"/><path class="m9me6bb5j"/><path class="un-laqb0a"/></g>`,
		"fallback": "iconoven:luggage-tag-sharp",
	});
}

export default Component;

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
		"content": `<style>.egjaj_btr {
  d: path("m6.75 15l1.5-3.75l1.5 3.25l1.5-4m0 0l7.25-2.25m0-.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vuaw5focb {
  d: path("M2.5 3h13v3.5h-13ZM4 6.5v14h10v-14");
}
</style><g class="ulnmmdpxh"><path class="vuaw5focb"/><path class="egjaj_btr"/></g>`,
		"fallback": "uix-sharp:thermograph",
	});
}

export default Component;

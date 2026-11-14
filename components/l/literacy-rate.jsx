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
		"content": `<style>.sfbrqvbbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6c-2-1.5-5-2-9.5-1.5v14C7 18 10 18.5 12 20c2-1.5 5-2 9.5-1.5v-14C17 4 14 4.5 12 6Zm0 0v14m2.5-5l4-6.5m-3.5.75h.01m3.24 5h.01");
}
</style><path class="sfbrqvbbe"/>`,
		"fallback": "uix-sharp:literacy-rate",
	});
}

export default Component;

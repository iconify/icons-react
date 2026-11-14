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
		"content": `<style>.ljrooce1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 19v-7.5m-2 0h19m-2 0V19m-2-13.5h-9a3 3 0 0 0 0 6h9ZM9 8.5h8.5");
}
</style><path class="ljrooce1c"/>`,
		"fallback": "uix-sharp:kids-desk",
	});
}

export default Component;

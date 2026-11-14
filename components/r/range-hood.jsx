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
		"content": `<style>.rt64lbbwi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5h10l3.5 7.5h-17Zm1 11h8M12 11v1.5m-3 6h.01m5.99 0h.01");
}
</style><path class="rt64lbbwi"/>`,
		"fallback": "uix-sharp:range-hood",
	});
}

export default Component;

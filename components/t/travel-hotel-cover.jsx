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
		"content": `<style>.ddrx4ybfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5V20m0-8.5h16q.224 0 .443.05t.422.147t.378.236t.316.315M12.328 16.5H3m3-11h6v3H6ZM14.75 18l2 2L21 15.75");
}
</style><path class="ddrx4ybfk"/>`,
		"fallback": "uix-sharp:travel-hotel-cover",
	});
}

export default Component;

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
		"content": `<style>.abgncsbii {
  d: path("M12 22c-3.5-2.5-9-6.5-9-11a9 9 0 0 1 18 0c0 4.5-5.5 8.5-9 11Z");
}

.iem2jlb_f {
  d: path("M12 14.5V11L9.5 8.5L7.75 6.75M12 11l2.5-2.5l1.75-1.75M9.5 8.5l1-2.5m4 2.5l-1-2.5");
}

.k4mnq_b5y {
  d: path("M8.5 14.5q1.75-1 3.5 0t3.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="abgncsbii"/><path class="iem2jlb_f"/><path class="k4mnq_b5y"/></g>`,
		"fallback": "uix-sharp:pin-reef",
	});
}

export default Component;

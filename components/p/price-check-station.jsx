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
		"content": `<style>.fh6y1kizw {
  d: path("M9.5 6.5h7v6h-7L7 9.5Zm.25 3h.01m4.99 7.75v4.25M17 17.25v4.25m2.25-4.25v4.25m2.25-4.25v4.25");
}

.qmlu21bes {
  d: path("M12 2.5v2m-.1 10H3.5v-10h17v9.9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qmlu21bes"/><path class="fh6y1kizw"/></g>`,
		"fallback": "uix-sharp:price-check-station",
	});
}

export default Component;

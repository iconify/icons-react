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
		"content": `<style>.az73opb-p {
  d: path("M12.8 14.5H4.5v-10h10v8.3m-7-8.3V2m4 2.5V2m-4 12.5V17m-3-9.5H2m2.5 4H2m12.5-4H17");
}

.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.lbobr8q7x {
  d: path("M7.5 7.5h4v4h-4Zm13.25 11A2.75 2.75 0 1 1 18 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="az73opb-p"/><path class="lbobr8q7x"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:recycle-electronics",
	});
}

export default Component;

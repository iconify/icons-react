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
		"content": `<style>.erkz_ccdh {
  d: path("M12.844 20.5H3.5v-10L12 3.25l8.5 7.25v2.456");
}

.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.o526cq8lq {
  d: path("M20.75 18.5A2.75 2.75 0 1 1 18 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="erkz_ccdh"/><path class="o526cq8lq"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:self-consumption",
	});
}

export default Component;

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
		"content": `<style>.brd4rluhx {
  d: path("M13.3 21.5H4.5v-19h15v10.4M8 6.5h1.5m5 0H16m-8 4h1.5m5 0H16m-8 4h1.5");
}

.oonqshkqs {
  d: path("M15.75 17.75v2c0 .75 1 1.25 2.25 1.25s2.25-.5 2.25-1.25v-2");
}

.u9m6o1byw {
  d: path("M10.5 21.5v-3.25h.85m3.4-1.5l3.25-1.5l3.25 1.5l-3.25 1.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="brd4rluhx"/><path class="u9m6o1byw"/><path class="oonqshkqs"/></g>`,
		"fallback": "uix-sharp:student-housing",
	});
}

export default Component;

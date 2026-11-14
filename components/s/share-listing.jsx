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
		"content": `<style>.b-6pju0tt {
  d: path("m19.25 14.25l2.25 2.25l-2.25 2.25");
}

.l1398kb5c {
  d: path("m5.5 10.5l4-4l4 4v4.786m-.986 1.214H5.5v-6M16 9h3m-3 3h1.6m-3.1 9.5v-2a3 3 0 0 1 3-3H21");
}

.nn12l5b8y {
  d: path("M11.7 19.5H2.5v-15h19v8.1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nn12l5b8y"/><path class="l1398kb5c"/><path class="b-6pju0tt"/></g>`,
		"fallback": "uix-sharp:share-listing",
	});
}

export default Component;

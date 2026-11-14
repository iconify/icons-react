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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.o4c588h0r {
  d: path("M3.5 3v17.5h9");
}

.qwvgi1bnw {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o4c588h0r"/><path class="qwvgi1bnw"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:usage-history",
	});
}

export default Component;

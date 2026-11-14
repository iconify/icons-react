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
		"content": `<style>.i94-m7bui {
  d: path("M2.998 13.991L13.874 8.92l1.901 4.078L4.9 18.069Z");
}

.qg503ccaz {
  d: path("m11.911 7.076l5.891-2.747l2.747 5.891l-5.891 2.747ZM10.5 15L7 21.5m3.5-6.5l3.5 6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i94-m7bui"/><path class="qg503ccaz"/></g>`,
		"fallback": "uix-sharp:spy-glass",
	});
}

export default Component;

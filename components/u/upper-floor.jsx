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
		"content": `<style>.rs0venbbu {
  fill: currentColor;
  d: path("M6 8.5h12V13H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.us_qbfb0n {
  d: path("M6 21.5v-13L12 3l6 5.5v13");
}

.z4xqf3bul {
  d: path("M2.5 21.5h19M6 17.25h12");
}
</style><g class="ulnmmdpxh"><path class="us_qbfb0n"/><path class="rs0venbbu"/><path class="z4xqf3bul"/></g>`,
		"fallback": "uix-sharp:upper-floor",
	});
}

export default Component;

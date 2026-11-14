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
		"content": `<style>.bc1bqfbkj {
  d: path("M2.5 2.5v19m19-19v19M12 2.5v4m0 11v4m-4 0V16c0-4 8-4 8-8V4");
}

.hscflvlbd {
  d: path("M13.25 6.75L16 4l2.75 2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bc1bqfbkj"/><path class="hscflvlbd"/></g>`,
		"fallback": "uix-sharp:lane-change-right",
	});
}

export default Component;

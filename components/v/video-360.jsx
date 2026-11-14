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
		"content": `<style>.cfs7aqbbb {
  d: path("M5.5 3h13v10h-13Z");
}

.sypslf0ox {
  d: path("M10.5 5.75L14.25 8l-3.75 2.25ZM2.5 12c0 4.5 4.5 8 9.5 8c3.25 0 6.5-1.5 8.5-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xiwl7qbno {
  d: path("m17.75 16.5l2.75-.5l.25 2.75");
}
</style><g class="ulnmmdpxh"><path class="cfs7aqbbb"/><path class="sypslf0ox"/><path class="xiwl7qbno"/></g>`,
		"fallback": "uix-sharp:video-360",
	});
}

export default Component;

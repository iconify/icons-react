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
		"content": `<style>.kchzq-b0q {
  d: path("m12 10.5l6.5 3.25v5L12 22l-6.5-3.25v-5Z");
}

.r43531bri {
  d: path("M5.5 13.75L12 17l6.5-3.25M12 17v5m0-20v5.75m-2.5-2.5l2.5 2.5l2.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kchzq-b0q"/><path class="r43531bri"/></g>`,
		"fallback": "uix-sharp:object-download",
	});
}

export default Component;

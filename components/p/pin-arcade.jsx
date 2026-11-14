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
		"content": `<style>.aavgute8r {
  d: path("M6 5.5h3.75V9H6ZM2.25 15H13.5m-7.25 0v-2a.75.75 0 0 1 0-1.5a.75.75 0 0 1 0 1.5M19 21.75l-2.25-3.25a2.75 2.75 0 1 1 4.5 0Z");
}

.rxk_2vcgk {
  d: path("M13.5 18.173V21.5H2.25V15l1-2.5V3.75L12.5 2.5v10l1 2.5v.373");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rxk_2vcgk"/><path class="aavgute8r"/></g>`,
		"fallback": "uix-sharp:pin-arcade",
	});
}

export default Component;

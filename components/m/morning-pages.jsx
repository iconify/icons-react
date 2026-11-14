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
		"content": `<style>.z-vv3kmfc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.3 17.5H3v-15h12.5v14M6.5 7H12m-5.5 4H10m5 10.5h7m-6.5 0a3 3 0 0 1 6 0m-3-6.75v1.5m2.25 1.25l.75-1.25");
}
</style><path class="z-vv3kmfc"/>`,
		"fallback": "uix-sharp:morning-pages",
	});
}

export default Component;

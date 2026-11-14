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
		"content": `<style>.t1orc_bwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.4 12.5H2.5v-10H17v9.2m-8.25.8V19m2.65 2.5H4.5V19h6.9M5.5 6h5m-5 3.25H8m3 0h3m3 5.25h-2.75v7H17m0-3.5h4.75m-2-2l2 2l-2 2");
}
</style><path class="t1orc_bwe"/>`,
		"fallback": "uix-sharp:pos-logout",
	});
}

export default Component;

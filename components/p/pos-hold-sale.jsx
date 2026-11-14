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
		"content": `<style>.o7383sbqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.4 12.5H2.5v-10H17v9.4m-8.25.6V19M4.5 19H13v2.5H4.5Zm1-13h5m-5 3.25H8m3 0h3m2.25 5.5v6.5m3.5-6.5v6.5");
}
</style><path class="o7383sbqp"/>`,
		"fallback": "uix-sharp:pos-hold-sale",
	});
}

export default Component;

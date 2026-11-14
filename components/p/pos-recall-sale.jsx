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
		"content": `<style>.vp2jctl1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 12.5H2.5v-10H17v9.9m-8.25.1V19m3.45 2.5H4.5V19h7.7M5.5 6h5m-5 3.25H8m3 0h3m1 5.25l6.5 3.5l-6.5 3.5Z");
}
</style><path class="vp2jctl1k"/>`,
		"fallback": "uix-sharp:pos-recall-sale",
	});
}

export default Component;

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
		"content": `<style>.njcar5yqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.6 21.5H3v-19h16.5v10.1M3 12h12.1m.8 0h3.6M7 5.5V12m3-6.5V12m3 0l2.5-6.25m0 9.75l5 5m0-5l-5 5");
}
</style><path class="njcar5yqp"/>`,
		"fallback": "uix-sharp:library-shelf-x",
	});
}

export default Component;

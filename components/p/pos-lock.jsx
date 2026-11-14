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
		"content": `<style>.q8bcwm_oc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.4 12.5H2.5v-10H17v9.3m-8.25.7V19m2.95 2.5H4.5V19h7.2M5.5 6h5m-5 3.25H8m3 0h3m.5 8.25h7V22h-7Zm1.75 0v-1.25a1.75 1.75 0 0 1 3.5 0v1.25");
}
</style><path class="q8bcwm_oc"/>`,
		"fallback": "uix-sharp:pos-lock",
	});
}

export default Component;

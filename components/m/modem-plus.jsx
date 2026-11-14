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
		"content": `<style>.lk9wa2s_a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.15 15.25H2.5V8h12.75v4.15M5.5 8V3m6.75 5V3M18 15v6m-3-3h6");
}
</style><path class="lk9wa2s_a"/>`,
		"fallback": "uix-sharp:modem-plus",
	});
}

export default Component;

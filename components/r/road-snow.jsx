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
		"content": `<style>.g9xxvk3qg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5L6 15m14.5 6.5L18 15m-6 1.5v4M12 3v9m3.897-6.75l-7.794 4.5m7.794 0l-7.794-4.5");
}
</style><path class="g9xxvk3qg"/>`,
		"fallback": "uix-sharp:road-snow",
	});
}

export default Component;

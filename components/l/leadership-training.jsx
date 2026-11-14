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
		"content": `<style>.cahvabb4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5L10 7l3.5 5.5l2-3l6 11ZM10 7V2.5m0 0l4 1.25L10 5Z");
}
</style><path class="cahvabb4a"/>`,
		"fallback": "uix-sharp:leadership-training",
	});
}

export default Component;

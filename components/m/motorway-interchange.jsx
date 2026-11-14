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
		"content": `<style>.jj4wdzbmx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19M2.5 12h6.75m5.5 0h6.75M12 8.5a3.5 3.5 0 1 1 3.5 3.5m-7 0A3.5 3.5 0 1 1 12 8.5m3.5 3.5a3.5 3.5 0 1 1-3.5 3.5m0 0A3.5 3.5 0 1 1 8.5 12");
}
</style><path class="jj4wdzbmx"/>`,
		"fallback": "uix:motorway-interchange",
	});
}

export default Component;

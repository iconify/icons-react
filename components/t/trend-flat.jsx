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
		"content": `<style>.gcrmkqbmq {
  d: path("m17.5 9.5l3 3l-3 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.utv5lsbwt {
  d: path("m3 13.5l4.5-4l4 3h9");
}
</style><g class="ulnmmdpxh"><path class="utv5lsbwt"/><path class="gcrmkqbmq"/></g>`,
		"fallback": "uix-sharp:trend-flat",
	});
}

export default Component;

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
		"content": `<style>.abrjikh2i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 21.5l4.5-13l4.5 13M12 3v5.5M8.75 4.25a4 4 0 0 0 0 4.5M6.25 2.5a7 7 0 0 0 0 8m9-6.25a4 4 0 0 1 0 4.5m2.5-6.25a7 7 0 0 1 0 8");
}
</style><path class="abrjikh2i"/>`,
		"fallback": "uix:public-broadcast-tower",
	});
}

export default Component;

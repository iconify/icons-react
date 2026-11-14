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
		"content": `<style>.vrgucyo_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.466 10.636L12 13L3.5 8.5L12 4l8.5 4.5l-1.913 1.013M6 10.5V15c0 1.375 2.519 2.329 5.249 2.479M3.5 8.5v6m14.25-.25l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291L17.75 19.5l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}
</style><path class="vrgucyo_q"/>`,
		"fallback": "uix-sharp:school-rating",
	});
}

export default Component;

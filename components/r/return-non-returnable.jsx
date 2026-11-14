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
		"content": `<style>.o3jtf-b9q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.34 20.651L3.5 16.5v-9L12 3l8.5 4.5v4.065M3.5 7.5l5.745 3.041m5.567-.03L20.5 7.5M12 12v2m3 7l6-6");
}
</style><path class="o3jtf-b9q"/>`,
		"fallback": "uix-sharp:return-non-returnable",
	});
}

export default Component;

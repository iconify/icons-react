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
		"content": `<style>.l2vxv1hto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 13a3.5 3.5 0 0 1-1.25-6.25a5 5 0 0 1 9.5-1A4 4 0 0 1 12.5 13ZM9 13v8.5m9-7.25l3.5 1.25V18c0 2-1.5 3.25-3.5 3.75c-2-.5-3.5-1.75-3.5-3.75v-2.5Z");
}
</style><path class="l2vxv1hto"/>`,
		"fallback": "uix-sharp:protected-area-fence",
	});
}

export default Component;

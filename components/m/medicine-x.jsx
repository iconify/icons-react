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
		"content": `<style>.dj-_vpy8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.222 13.828L13.828 3.222a1.5 1.5 0 0 1 2.122 0l2.828 2.828a1.5 1.5 0 0 1 0 2.122L8.172 18.778a1.5 1.5 0 0 1-2.122 0L3.222 15.95a1.5 1.5 0 0 1 0-2.122Zm5.303-5.303l4.95 4.95M15.5 15.5l5 5m0-5l-5 5");
}
</style><path class="dj-_vpy8z"/>`,
		"fallback": "uix-sharp:medicine-x",
	});
}

export default Component;

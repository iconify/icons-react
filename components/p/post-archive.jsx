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
		"content": `<style>.rlnnd2b5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12.5V19A2.5 2.5 0 0 0 6 21.5h12a2.5 2.5 0 0 0 2.5-2.5v-6.5M10 17h4M12 2.5V10M9 7l3 3l3-3");
}
</style><path class="rlnnd2b5m"/>`,
		"fallback": "uix-sharp:post-archive",
	});
}

export default Component;

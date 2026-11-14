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
		"content": `<style>.zjm5ktb5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 9h-1A2.5 2.5 0 0 0 5 11.5V18a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 18v-6.5A2.5 2.5 0 0 0 16.5 9h-1M12 14V3M8.5 6.5L12 3l3.5 3.5");
}
</style><path class="zjm5ktb5j"/>`,
		"fallback": "uix-sharp:share",
	});
}

export default Component;

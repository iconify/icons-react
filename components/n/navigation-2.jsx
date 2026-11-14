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
		"content": `<style>.rbhq-n7ey {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19.601 4.399l-6.717 15.202l-1.768-6.717l-6.717-1.768Z");
}
</style><path class="rbhq-n7ey"/>`,
		"fallback": "uix-sharp:navigation-2",
	});
}

export default Component;

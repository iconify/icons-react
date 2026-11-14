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
		"content": `<style>.wh9n6hbak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.5h6v9H9Zm-6.5-3h19M2.5 12h3.75m11.5 0h3.75m-19 7.5h12");
}
</style><path class="wh9n6hbak"/>`,
		"fallback": "uix-sharp:keyword-gap",
	});
}

export default Component;

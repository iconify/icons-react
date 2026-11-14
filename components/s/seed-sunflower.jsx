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
		"content": `<style>.sk6zo0hzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c3.5 3.5 5.5 9 5 13c-.5 3.5-2.5 6-5 6s-4.5-2.5-5-6c-.5-4 1.5-9.5 5-13ZM10.5 11v7m3-7v7");
}
</style><path class="sk6zo0hzy"/>`,
		"fallback": "uix-sharp:seed-sunflower",
	});
}

export default Component;

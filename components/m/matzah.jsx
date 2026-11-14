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
		"content": `<style>.jilmsobgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4q4-1 8 0t8 0q1 4 0 8t0 8q-4-1-8 0t-8 0q-1-4 0-8t0-8Zm3.5 5.5H9m2.25 0h1.5m2.25 0h1.5m-9 5H9m2.25 0h1.5m2.25 0h1.5");
}
</style><path class="jilmsobgk"/>`,
		"fallback": "uix-sharp:matzah",
	});
}

export default Component;

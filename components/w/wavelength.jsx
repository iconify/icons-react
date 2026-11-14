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
		"content": `<style>.v8goo3siv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15c1.75-5 4.25-5 6 0s4.25 5 6 0s4.25-5 6 0m-15-9h12m-12-2v4m12-4v4");
}
</style><path class="v8goo3siv"/>`,
		"fallback": "uix-sharp:wavelength",
	});
}

export default Component;

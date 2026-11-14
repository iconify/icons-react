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
		"content": `<style>.clctdkb3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h7.5v5.5H3Zm0 18.5l1.25-13m6.25 13l-1.25-13m4.25 13v-13h8v13m-8-7.5h8m-4-5.5V14");
}
</style><path class="clctdkb3o"/>`,
		"fallback": "uix-sharp:volleyball-referee-stand",
	});
}

export default Component;

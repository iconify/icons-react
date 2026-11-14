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
		"content": `<style>.p-fx25blh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.3 17.25H2.5v-3.5h7.3m7.9 0h3.8v3.5h-.3m-14.7-3.5v3.5m-2-3.5v3.5m16-5.25c-1.25-1.25.75-2.5-.25-4c-.75-1.25.25-2.25 1-3M3.5 3.5l17 17");
}
</style><path class="p-fx25blh"/>`,
		"fallback": "uix-sharp:no-smoking-hospital",
	});
}

export default Component;

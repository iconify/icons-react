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
		"content": `<style>.aerimeb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12m-6 0v3m0 0l5 4v8l-2.5 4h-5l-2.5-4v-8Zm-5 4h10m-7 2.75V18m4-5.75V18");
}
</style><path class="aerimeb9a"/>`,
		"fallback": "uix-sharp:lantern-hanging",
	});
}

export default Component;

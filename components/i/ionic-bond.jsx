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
		"content": `<style>.s1nnh-ueu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm9.5 0a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0Zm-2.5 0H12m-6-1.5v3M4.5 12h3m7 0H19");
}
</style><path class="s1nnh-ueu"/>`,
		"fallback": "uix-sharp:ionic-bond",
	});
}

export default Component;

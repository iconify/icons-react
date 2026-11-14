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
		"content": `<style>.a_-a-n_fl {
  d: path("M13.5 2.5h4v15h-4Zm4 5H20V10M4 13c1.5-1.25 3 1.25 4.75 0s3.25 1.25 4.75 0");
}

.l3ev0rb3z {
  d: path("M4 10v8.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l3ev0rb3z"/><path class="a_-a-n_fl"/></g>`,
		"fallback": "uix-sharp:sous-vide",
	});
}

export default Component;

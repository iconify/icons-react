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
		"content": `<style>.o0kdbnb4q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 19h12v2.5h-12Zm3.5 0V2.5m0 5h7.5m0-3.5v10.5a2 2 0 0 0 4 0V4");
}
</style><path class="o0kdbnb4q"/>`,
		"fallback": "uix-sharp:retort-stand",
	});
}

export default Component;

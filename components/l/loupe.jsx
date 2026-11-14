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
		"content": `<style>.ivkge1y2w {
  d: path("m16.187 13.712l3.889 3.889l-2.475 2.475l-3.889-3.889ZM6 10a4 4 0 0 1 4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9she8buy {
  d: path("M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}
</style><g class="ulnmmdpxh"><path class="y9she8buy"/><path class="ivkge1y2w"/></g>`,
		"fallback": "uix-sharp:loupe",
	});
}

export default Component;

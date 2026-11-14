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
		"content": `<style>.bfhnicc7r {
  d: path("M2.5 4h8v16h-8Zm11 0h8v16h-8Z");
}

.jd2f9oa2x {
  d: path("M4.5 14.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bfhnicc7r"/><path class="jd2f9oa2x"/></g>`,
		"fallback": "uix-sharp:multiroom-audio",
	});
}

export default Component;

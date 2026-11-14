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
		"content": `<style>.bg8lym5-j {
  d: path("M2.5 6.5h15v13h-15Z");
}

.j5n5mkb9c {
  d: path("M6.5 6.5V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-2m-15 1L7 12l4.5 4.5m2-6.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bg8lym5-j"/><path class="j5n5mkb9c"/></g>`,
		"fallback": "uix-sharp:spatial-photo",
	});
}

export default Component;

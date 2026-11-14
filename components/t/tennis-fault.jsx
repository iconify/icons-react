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
		"content": `<style>.b4a7_9n8n {
  d: path("M2.5 11H12v4.1m0 .8v4.2m0 .8v.6m1.5-15a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.noysz0zug {
  d: path("M14.25 4a3.5 3.5 0 0 1 0 5m1.25 6.5l5 5m0-5l-5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b4a7_9n8n"/><path class="noysz0zug"/></g>`,
		"fallback": "uix-sharp:tennis-fault",
	});
}

export default Component;

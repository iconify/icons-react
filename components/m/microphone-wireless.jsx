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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xnqf-2bqe {
  d: path("m7.25 12l1.25 9h2l1.25-9m3.379-7.25a6.5 6.5 0 0 1 0 6.5m2.382-7.875a9.25 9.25 0 0 1 0 9.25");
}

.yso5v1bzu {
  d: path("M5 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}
</style><g class="ulnmmdpxh"><path class="yso5v1bzu"/><path class="xnqf-2bqe"/></g>`,
		"fallback": "uix-sharp:microphone-wireless",
	});
}

export default Component;

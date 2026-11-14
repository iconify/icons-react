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
		"content": `<style>.ogb3_-b4g {
  d: path("M5 3h14a2 2 0 0 1 2 2v8q-5 0-8 8H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z");
}

.qfv0rmi_j {
  d: path("M21 13q-1 5.5-8 8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ogb3_-b4g"/><path class="qfv0rmi_j"/></g>`,
		"fallback": "uix-sharp:microfiber-cloth",
	});
}

export default Component;

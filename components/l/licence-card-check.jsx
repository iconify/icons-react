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
		"content": `<style>.cq96f8bmf {
  d: path("M5.75 10.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM12.5 9h5m-5 3.5h3m-.75 5.5l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wj8voob3a {
  d: path("M11.8 19H2.5V5h19v7.3");
}
</style><g class="ulnmmdpxh"><path class="wj8voob3a"/><path class="cq96f8bmf"/></g>`,
		"fallback": "uix-sharp:licence-card-check",
	});
}

export default Component;

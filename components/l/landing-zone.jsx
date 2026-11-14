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
		"content": `<style>.ngmfanbql {
  d: path("M7.5 10.5a4.5 2 0 1 0 9 0a4.5 2 0 1 0-9 0Z");
}

.ozmqoyh_b {
  d: path("M3 10.5a9 5 0 1 0 18 0a9 5 0 1 0-18 0ZM2.5 19h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ozmqoyh_b"/><path class="ngmfanbql"/></g>`,
		"fallback": "uix-sharp:landing-zone",
	});
}

export default Component;

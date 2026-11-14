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
		"content": `<style>.aehpv1jcy {
  d: path("M11.6 21.5H4.5v-19h15v10.1M8 6.5h3.5M8 10h8m-8 3.5h5.4M8 17h2.5m4.5 4l5.25-5.25");
}

.ejkj6th1k {
  d: path("M16.25 15.5h4.25v4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aehpv1jcy"/><path class="ejkj6th1k"/></g>`,
		"fallback": "uix-sharp:treasury-payables",
	});
}

export default Component;

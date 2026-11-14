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
		"content": `<style>.bdyuy9jkj {
  d: path("M14 9.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM15 21l5.25-5.25m-4-.25h4.25v4.25");
}

.d-qzimbtd {
  d: path("M13.4 17H2.5V4h19v8.7M6 13.5l5-6m-4.5.75h.01m3.99 4.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d-qzimbtd"/><path class="bdyuy9jkj"/></g>`,
		"fallback": "uix-sharp:loan-interest-certificate",
	});
}

export default Component;

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
		"content": `<style>.d925dqbjv {
  d: path("M3 4.5h18V21H3Zm5-2v4m8-4v4");
}

.uauzs9bqj {
  d: path("m7.5 13.5l3.25 3.25L16.5 11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d925dqbjv"/><path class="uauzs9bqj"/></g>`,
		"fallback": "uix-sharp:meeting-booked",
	});
}

export default Component;

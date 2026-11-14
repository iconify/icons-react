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
		"content": `<style>.l9v88dq3g {
  d: path("M2.5 21.5h19M11.5 5H13m2.5 0H17m2.5 0H21m-4.75 1.75V10M14.5 8.25L16.25 10L18 8.25");
}

.naxiutb8p {
  d: path("M4.5 5H10v16.5H4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yj92s03gl {
  fill: currentColor;
  d: path("M13.5 12H19v9.5h-5.5Z");
}
</style><g class="ulnmmdpxh"><path class="naxiutb8p"/><path class="yj92s03gl"/><path class="l9v88dq3g"/></g>`,
		"fallback": "uix-sharp:variance-down",
	});
}

export default Component;

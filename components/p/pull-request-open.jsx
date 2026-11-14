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
		"content": `<style>.b6m1gwbvv {
  d: path("M18 7.25V11a4 4 0 0 1-4 4H9.5");
}

.q5dr00bah {
  d: path("M11.75 12.75L9.5 15l2.25 2.25");
}

.sgotlh2an {
  d: path("M3.75 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm0 14a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM6 7.25v9.5M15.75 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sgotlh2an"/><path class="b6m1gwbvv"/><path class="q5dr00bah"/></g>`,
		"fallback": "uix-sharp:pull-request-open",
	});
}

export default Component;

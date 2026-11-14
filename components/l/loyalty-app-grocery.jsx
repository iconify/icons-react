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
		"content": `<style>.dx5whws5n {
  d: path("m12 8.5l1.323 2.68l2.957.429l-2.14 2.086l.505 2.946L12 15.25l-2.645 1.391l.505-2.946l-2.14-2.086l2.957-.429Z");
}

.ptbj7db6p {
  d: path("M6 2.5h12v19H6Zm4.5 3h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ptbj7db6p"/><path class="dx5whws5n"/></g>`,
		"fallback": "uix-sharp:loyalty-app-grocery",
	});
}

export default Component;

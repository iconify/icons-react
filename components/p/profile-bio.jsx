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
		"content": `<style>.b5oeb3bzg {
  d: path("M8.5 10.75c0-1.5 1.5-2.5 3.5-2.5s3.5 1 3.5 2.5M7 13.5h10M7 16.25h10M7 19h6.5");
}

.hrvg60ypl {
  d: path("M3.5 2h17v20h-17Z");
}

.j92dt3bnl {
  d: path("M10.25 6.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hrvg60ypl"/><path class="j92dt3bnl"/><path class="b5oeb3bzg"/></g>`,
		"fallback": "uix-sharp:profile-bio",
	});
}

export default Component;

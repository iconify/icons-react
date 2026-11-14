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
		"content": `<style>.abgncsbii {
  d: path("M12 22c-3.5-2.5-9-6.5-9-11a9 9 0 0 1 18 0c0 4.5-5.5 8.5-9 11Z");
}

.cnud37bkc {
  d: path("M9.25 6.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm1.75 4.5V14h4v2.25M8.25 9.5v7m0-2.5H11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="abgncsbii"/><path class="cnud37bkc"/></g>`,
		"fallback": "uix-sharp:pin-rest-area",
	});
}

export default Component;

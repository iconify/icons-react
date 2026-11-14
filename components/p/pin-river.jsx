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

.ibfd42bei {
  d: path("M8 6.5c3 1 3.5 3.5 2 6c-1 1.75-.5 2.75.5 3.5M12 6.5c3.25 1 3.5 3.5 2 6c-1 1.75-.75 2.75 0 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="abgncsbii"/><path class="ibfd42bei"/></g>`,
		"fallback": "uix-sharp:pin-river",
	});
}

export default Component;

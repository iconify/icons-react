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
		"content": `<style>.p0ea7bczg {
  d: path("M18 14.75L21 16v2.25c0 1.75-1.25 2.75-3 3.5c-1.75-.75-3-1.75-3-3.5V16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wr1328biq {
  d: path("M12.2 19H2.5V5h19v8.2m-19-3.7h19m-19 0h19M6 15h2.5");
}
</style><g class="ulnmmdpxh"><path class="wr1328biq"/><path class="p0ea7bczg"/></g>`,
		"fallback": "uix-sharp:payment-secure-badge",
	});
}

export default Component;

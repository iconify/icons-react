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
		"content": `<style>.c735_mbvw {
  d: path("M11.7 19H2.5V5h19v8.6");
}

.rc5m4sbbr {
  d: path("m2.5 7l9.5 6l9.5-6m-7 10.25h6.75m-2.5-2.5l2.5 2.5l-2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c735_mbvw"/><path class="rc5m4sbbr"/></g>`,
		"fallback": "uix-sharp:resignation-letter",
	});
}

export default Component;

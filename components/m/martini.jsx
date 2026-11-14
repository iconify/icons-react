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
		"content": `<style>.dq4lijbge {
  d: path("M12 21v-7.5L3.5 4h17L12 13.5M8 21h8");
}

.k2e38tbvp {
  d: path("M10.5 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm1.5 0l5.5-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dq4lijbge"/><path class="k2e38tbvp"/></g>`,
		"fallback": "uix-sharp:martini",
	});
}

export default Component;

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
		"content": `<style>.g41acebvw {
  d: path("M3 6.75L11 11l8-4.25M11 11v9.25M7 4.75l8 4m.5 6.25h6m-6 3.25h6m-6 3.25H19");
}

.jc-0t07ck {
  d: path("M12.738 19.327L11 20.25L3 16V6.75l8-4.25l8 4.25v5.441");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jc-0t07ck"/><path class="g41acebvw"/></g>`,
		"fallback": "uix-sharp:package-changelog",
	});
}

export default Component;

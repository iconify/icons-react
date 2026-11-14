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
		"content": `<style>.rr3b8wd3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM6 7v3m0 4v3m4.5-12H12m2.5 0h6m-10 7H12m2.5 0h4m-8 7H12m2.5 0H17");
}
</style><path class="rr3b8wd3h"/>`,
		"fallback": "uix-sharp:security-audit-trail",
	});
}

export default Component;

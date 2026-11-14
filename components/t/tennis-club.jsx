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
		"content": `<style>.um3pinbvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 9a5 7 0 1 0 10 0a5 7 0 1 0-10 0Zm-.834 4.066l1.768 1.768l-5.303 5.303l-1.768-1.768ZM18.45 4.05l-9.9 9.9m1.414-8.486l7.072 7.072M16 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><path class="um3pinbvt"/>`,
		"fallback": "uix-sharp:tennis-club",
	});
}

export default Component;

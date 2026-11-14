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
		"content": `<style>.a1sidvqup {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 4.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM17.5 3L11 9.25L6.5 10.5l-1.5 4m6-5.25l1 5.25l-3 7m3-7l7 4");
}
</style><path class="a1sidvqup"/>`,
		"fallback": "uix-sharp:person-dancing",
	});
}

export default Component;

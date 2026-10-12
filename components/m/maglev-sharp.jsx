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
		"content": `<style>.d5-njfbqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 8H13c3.5 0 6.6 2.2 8 5l.35.99l-1.05.01H2.75V8zm1.75 2.75h9M7 17.25h1.5m7 0H17m-14 3h18");
}
</style><path class="d5-njfbqv"/>`,
		"fallback": "iconoven:maglev-sharp",
	});
}

export default Component;

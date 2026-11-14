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
		"content": `<style>.spiq9ccna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 7a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM8.5 20c0-3.5 2.75-6.5 6.5-6.5s6.5 3 6.5 6.5M2.5 7h6.25M6 4.25L8.75 7L6 9.75");
}
</style><path class="spiq9ccna"/>`,
		"fallback": "uix-sharp:player-substitute-in",
	});
}

export default Component;

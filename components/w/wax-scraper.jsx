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
		"content": `<style>.de69i05yc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19v5l-2 2.5h-15l-2-2.5Zm7 0V6.5a2.5 2.5 0 0 1 5 0V12");
}
</style><path class="de69i05yc"/>`,
		"fallback": "uix:wax-scraper",
	});
}

export default Component;

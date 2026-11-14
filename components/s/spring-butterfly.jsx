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
		"content": `<style>.pisjqlb6s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8C9 3 2.75 3 2.75 8c0 3.5 4.25 4.5 9.25 3m0-3c3-5 9.25-5 9.25 0c0 3.5-4.25 4.5-9.25 3m0 3c-4.5-.5-7 1.5-6.75 4S10 20.5 12 17.5m0-3.5c4.5-.5 7 1.5 6.75 4S14 20.5 12 17.5M12 8v9.5");
}
</style><path class="pisjqlb6s"/>`,
		"fallback": "uix-sharp:spring-butterfly",
	});
}

export default Component;

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
		"content": `<style>.opo8hipom {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 10.5h12v2H6Zm2 2V19m8-6.5V19M6 19h12v2.5H6Zm4.5-16h3v1c2 1 2.5 2.5 2.5 4s-1.5 2.5-4 2.5s-4-1-4-2.5s.5-3 2.5-4Z");
}
</style><path class="opo8hipom"/>`,
		"fallback": "uix-sharp:museum-pedestal",
	});
}

export default Component;

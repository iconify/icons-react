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
		"content": `<style>.gctk-we6y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 9a6 6.5 0 1 0 12 0A6 6.5 0 1 0 6 9m3.525 5.475l-5.657 5.657M12.53 4.045l7.425 7.425M9.879 5.636l8.485 8.485M8.288 8.288l7.424 7.424");
}
</style><path class="gctk-we6y"/>`,
		"fallback": "uix:rug-beater",
	});
}

export default Component;

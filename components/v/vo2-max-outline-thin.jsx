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
		"content": `<style>.mg1kpbz5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3v5m0 0c-4 0 -7 3 -7 7 0 3 1 5 4 5 2 0 3 -1 3 -4 0 3 1 4 3 4 3 0 4 -2 4 -5 0 -4 -3 -7 -7 -7");
}
</style><path class="mg1kpbz5z"/>`,
		"fallback": "iconmind:vo2-max-outline-thin",
	});
}

export default Component;

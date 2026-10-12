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
		"content": `<style>.vrw6angyi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c3.5 0 5 2.5 5 6c0 3-1 4.5-1 7.5S14.5 21 12 21s-4-1.75-4-4.75s-1-4.5-1-7.5c0-3.5 1.5-6 5-6m0 2.75V8m0 0l-3.25 4.25M12 8l3.25 4.25");
}
</style><path class="vrw6angyi"/>`,
		"fallback": "iconoven:sandal",
	});
}

export default Component;

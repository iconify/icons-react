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
		"content": `<style>.z4m2rzb3z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5a9 6.75 0 0 1 18 0q-2.25-1.5-4.5 0q-2.25-1.5-4.5 0q-2.25-1.5-4.5 0Q5.25 8 3 9.5m.75 1l5.75 5m10.75-5l-5.75 5M12 10.25v5.25m-.75.75h1.5q.75 0 1.09.67l1.82 3.66q.34.67-.41.67h-6.5q-.75 0-.41-.67l1.82-3.66q.34-.67 1.09-.67");
}
</style><path class="z4m2rzb3z"/>`,
		"fallback": "iconoven:parachute-capsule",
	});
}

export default Component;

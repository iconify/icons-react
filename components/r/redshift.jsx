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
		"content": `<style>.usqg9mb4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14c1.08 4 1.92 4 3 0c1.44-4 2.56-4 4 0c1.8 4 3.2 4 5 0c2.34-4 4.16-4 6.5 0M5.5 2.75q.33 2.42 2.75 2.75q-2.42.33-2.75 2.75q-.33-2.42-2.75-2.75q2.42-.33 2.75-2.75");
}
</style><path class="usqg9mb4b"/>`,
		"fallback": "iconoven:redshift",
	});
}

export default Component;

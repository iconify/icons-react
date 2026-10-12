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
		"content": `<style>.k16-0jb4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12h18.5M8 10.25v-6.5M5.25 6.5L8 3.75l2.75 2.75M16 13.75v6.5m-2.75-2.75L16 20.25l2.75-2.75");
}
</style><path class="k16-0jb4z"/>`,
		"fallback": "iconoven:loss",
	});
}

export default Component;

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
		"content": `<style>.r2yxbsbjw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 8.25c0-1.75 3.25-3 7.25-3s7.25 1.25 7.25 3c0 1-1.25 1.75-2.75 1.75h-9C6 10 4.75 9.25 4.75 8.25M12 10v8.25M12 14l-3-4m3 3l2.25-3m-11.5 8.25h18.5m-14.75 3h11");
}
</style><path class="r2yxbsbjw"/>`,
		"fallback": "iconoven:savanna",
	});
}

export default Component;

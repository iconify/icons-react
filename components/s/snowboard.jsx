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
		"content": `<style>.p06azrbna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.6 4.4c1.24 1.24 1.06 2.83-.18 4.06L8.46 19.42c-1.23 1.24-2.82 1.42-4.06.18s-1.06-2.83.18-4.06L15.54 4.58c1.23-1.24 2.82-1.42 4.06-.18m-8.13 2.12l6.01 6.01M6.52 11.47l6.01 6.01");
}
</style><path class="p06azrbna"/>`,
		"fallback": "iconoven:snowboard",
	});
}

export default Component;

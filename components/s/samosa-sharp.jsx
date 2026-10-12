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
		"content": `<style>.ug02xj5fs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 4.1l1-1.5L12.1 4l8.8 13.6l.7 1.4l-1.6.4a1.6 1.6 0 0 1-3.2 0a1.6 1.6 0 0 1-3.2 0a1.6 1.6 0 0 1-3.2 0a1.6 1.6 0 0 1-3.2 0a1.6 1.6 0 0 1-3.2 0H2.4l.7-1.4Zm1.5 3.15L7.75 17M12 9l2.25 3.5");
}
</style><path class="ug02xj5fs"/>`,
		"fallback": "iconoven:samosa-sharp",
	});
}

export default Component;

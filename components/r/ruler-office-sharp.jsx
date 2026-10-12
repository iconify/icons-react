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
		"content": `<style>.jdjno3b1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.25h18.5v6H2.75zm3.25 0v2.5m3-2.5v1.5m3-1.5v2.5m3-2.5v1.5m3-1.5v2.5M7.75 5h13.5v4H7l-.66-.35l-2.43-1.3L3.25 7l.66-.35l2.43-1.3L7 5zM8 5v4");
}
</style><path class="jdjno3b1w"/>`,
		"fallback": "iconoven:ruler-office-sharp",
	});
}

export default Component;

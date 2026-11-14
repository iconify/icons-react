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
		"content": `<style>.gv6xlnbbm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12ZM12 6v4.5m0 3h.01");
}
</style><path class="gv6xlnbbm"/>`,
		"fallback": "uix-sharp:issue-pin",
	});
}

export default Component;

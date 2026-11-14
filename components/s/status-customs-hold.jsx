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
		"content": `<style>.gd-5brzfs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 20.5H3.5v-17h17v8.2M3.5 9h17M12 3.5V9m6 5.5V18m0 3h.01");
}
</style><path class="gd-5brzfs"/>`,
		"fallback": "uix-sharp:status-customs-hold",
	});
}

export default Component;

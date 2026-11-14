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
		"content": `<style>.hw8b8wbvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 16H2.5V3.5h19v9.2M10 16v4m-3.5 0h5.7m2.8-4.5h6.5M15 20h6.5M17 13.75v3.5m2.5 1v3.5");
}
</style><path class="hw8b8wbvy"/>`,
		"fallback": "uix-sharp:quality-settings",
	});
}

export default Component;

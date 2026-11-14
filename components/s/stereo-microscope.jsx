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
		"content": `<style>.mq1o1z1_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 18.5h17v3h-17Zm10.5-9h3.5v9M7.5 7H14v5.5H7.5Zm1.25 0L7 2.75M12.75 7l1.75-4.25");
}
</style><path class="mq1o1z1_z"/>`,
		"fallback": "uix-sharp:stereo-microscope",
	});
}

export default Component;

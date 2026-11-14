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
		"content": `<style>.ns4fx-iqz {
  d: path("M12 12s-2.75-1.5-2.75-3.5c0-.75.75-1.5 1.5-1.5c.5 0 1 .25 1.25.75c.25-.5.75-.75 1.25-.75c.75 0 1.5.75 1.5 1.5c0 2-2.75 3.5-2.75 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.weez58bvj {
  d: path("M12 21.5S4.5 15 4.5 9.5a7.5 7.5 0 0 1 15 0c0 5.5-7.5 12-7.5 12Z");
}
</style><g class="ulnmmdpxh"><path class="weez58bvj"/><path class="ns4fx-iqz"/></g>`,
		"fallback": "uix-sharp:map-pin-heart",
	});
}

export default Component;

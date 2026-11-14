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
		"content": `<style>.qal8x1xfb {
  d: path("M15.75 16a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm2 4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zbrsesfxm {
  d: path("M12.2 19H2.5V5h19v8.2m-19-3.7h19M15 16h6m-6 4h6");
}
</style><g class="ulnmmdpxh"><path class="zbrsesfxm"/><path class="qal8x1xfb"/></g>`,
		"fallback": "uix-sharp:treasury-spending-controls",
	});
}

export default Component;

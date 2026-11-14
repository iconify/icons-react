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
		"content": `<style>.hfmqhy5ar {
  d: path("M10.5 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM7 19.5h10");
}

.ig269_-al {
  d: path("M3 16.5a9 9 0 0 1 18 0m-18.5 0h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ig269_-al"/><path class="hfmqhy5ar"/></g>`,
		"fallback": "uix-sharp:meal-serving",
	});
}

export default Component;

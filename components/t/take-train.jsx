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
		"content": `<style>.qamzuwdvc {
  d: path("M2.5 5h19v11h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.whv8uer5v {
  d: path("M5.5 8h5v3.5h-5Zm8 0h5v3.5h-5ZM5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM2.5 20h19");
}
</style><g class="ulnmmdpxh"><path class="qamzuwdvc"/><path class="whv8uer5v"/></g>`,
		"fallback": "uix-sharp:take-train",
	});
}

export default Component;

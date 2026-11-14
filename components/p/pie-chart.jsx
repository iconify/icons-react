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
		"content": `<style>.aj4e5pi4u {
  d: path("M11 4.5a8.5 8.5 0 1 0 8.5 8.5H11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y7k3xdbcy {
  d: path("M14 2.5a7.5 7.5 0 0 1 7.5 7.5H14Z");
}
</style><g class="ulnmmdpxh"><path class="aj4e5pi4u"/><path class="y7k3xdbcy"/></g>`,
		"fallback": "uix-sharp:pie-chart",
	});
}

export default Component;

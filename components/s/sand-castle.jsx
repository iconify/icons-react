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
		"content": `<style>.bmlqohc6y {
  d: path("M3.5 20.5V8h1.75v2h2V8H9v4h6V8h1.75v2h2V8h1.75v12.5Z");
}

.grbtyvtes {
  d: path("M10.5 20.5v-3a1.5 1.5 0 0 1 3 0v3M12 12V4m0 0l2.5 1.25L12 6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bmlqohc6y"/><path class="grbtyvtes"/></g>`,
		"fallback": "uix-sharp:sand-castle",
	});
}

export default Component;

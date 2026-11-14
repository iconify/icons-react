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
		"content": `<style>.jf3t14brx {
  d: path("M5 8.5V17a3.5 3.5 0 0 0 3.5 3.5h7A3.5 3.5 0 0 0 19 17V8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yvswdcbbr {
  d: path("M5 14q1.75-1.5 3.5 0t3.5 0t3.5 0t3.5 0M12 3S9.75 5.5 9.75 6.75a2.25 2.25 0 0 0 4.5 0C14.25 5.5 12 3 12 3Z");
}
</style><g class="ulnmmdpxh"><path class="jf3t14brx"/><path class="yvswdcbbr"/></g>`,
		"fallback": "uix-sharp:liquid-state",
	});
}

export default Component;

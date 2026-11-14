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
		"content": `<style>.nd0wcqn-p {
  d: path("M4.5 12.25V8c4-3.5 11-3.5 15 0v4.25M12 5.5V10m-8 8c2.5-2 4.5 2 8 0s5.5 2 8 0");
}

.r8658cf1x {
  d: path("M2.5 13C7 9 17 9 21.5 13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r8658cf1x"/><path class="nd0wcqn-p"/></g>`,
		"fallback": "uix-sharp:stream-bridge-wood",
	});
}

export default Component;

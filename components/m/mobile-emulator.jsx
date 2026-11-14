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
		"content": `<style>.qusedmqjp {
  d: path("M2 2.5h20V17H2ZM12 17v4m-4 0h8");
}

.th82f08iv {
  d: path("M8.75 5.25h6.5v9h-6.5Zm2 6.25h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qusedmqjp"/><path class="th82f08iv"/></g>`,
		"fallback": "uix-sharp:mobile-emulator",
	});
}

export default Component;

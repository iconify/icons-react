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
		"content": `<style>.m1rj8hvhe {
  d: path("M15.75 21.5V18h3v3.5m-1.5-13.25s-2.5-1.75-2.5-3.75a2.5 2.5 0 0 1 5 0c0 2-2.5 3.75-2.5 3.75ZM2.5 21.5h3m2.75 0h2");
}

.mkq9rn5pb {
  d: path("m13 15l4.25-4l4.25 4v6.5H13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mkq9rn5pb"/><path class="m1rj8hvhe"/></g>`,
		"fallback": "uix-sharp:last-mile",
	});
}

export default Component;

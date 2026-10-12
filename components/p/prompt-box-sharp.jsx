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
		"content": `<style>.e408uacwa {
  d: path("M2.75 6.25h18.5v11.5H2.75z");
}

.ebrzzz9_q {
  d: path("M6.5 9.75L8.75 12L6.5 14.25m4.5 0h2.5m3.75-4.75v5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="e408uacwa"/><path class="ebrzzz9_q"/></g>`,
		"fallback": "iconoven:prompt-box-sharp",
	});
}

export default Component;

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
		"content": `<style>.e1jbaac0a {
  d: path("M7.5 7.5Q9.25 6 11 7.5t3.5 0m-7 4q1.75-1.5 3.5 0t3.5 0m1 4l5 5m0-5l-5 5");
}

.gsdfceb6i {
  d: path("M12.6 19.5H4v-17h14v11.6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gsdfceb6i"/><path class="e1jbaac0a"/></g>`,
		"fallback": "uix-sharp:manuscript-x",
	});
}

export default Component;

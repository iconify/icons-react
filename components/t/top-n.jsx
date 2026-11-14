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
		"content": `<style>.eqfs0qjqz {
  d: path("m11 12l1.25-1v4.5M8.5 14v7m7-4.5V21");
}

.lh4qf1bgi {
  d: path("M2.5 21v-7h6V8.5h7v8h6V21Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lh4qf1bgi"/><path class="eqfs0qjqz"/></g>`,
		"fallback": "uix-sharp:top-n",
	});
}

export default Component;

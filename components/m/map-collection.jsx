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
		"content": `<style>.hkoqnyrzh {
  d: path("m2.5 10l4.25-1.5l4.5 1.5l4.25-1.5V20l-4.25 1.5l-4.5-1.5l-4.25 1.5Zm4.25-1.5V20m4.5-10v11.5");
}

.q4kykgc9i {
  d: path("m5.5 7l4.25-1.5l4.5 1.5l4.25-1.5V17l-3 1");
}

.tmucf2bze {
  d: path("m8.5 4l4.25-1.5l4.5 1.5l4.25-1.5V14l-3 1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hkoqnyrzh"/><path class="q4kykgc9i"/><path class="tmucf2bze"/></g>`,
		"fallback": "uix-sharp:map-collection",
	});
}

export default Component;

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
		"content": `<style>.dwq_-9bxy {
  d: path("M8 10.25V7.5a4 4 0 0 1 8 0v2.75m-11.25 0h14.5v11H4.75z");
}

.safcbkboc {
  d: path("M12 12.25q.42 3.08 3.5 3.5q-3.08.42-3.5 3.5q-.42-3.08-3.5-3.5q3.08-.42 3.5-3.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dwq_-9bxy"/><path class="safcbkboc"/></g>`,
		"fallback": "iconoven:privacy-ai-sharp",
	});
}

export default Component;

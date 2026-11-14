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
		"content": `<style>.bicjjbbko {
  d: path("M6 16.5q.5-6 6-5.5m3-1.75h.01M14.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ppt24jbbu {
  d: path("M11.868 19.456L9 18.5l-6 2v-15l6-2l6 2l6-2v8.926");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ppt24jbbu"/><path class="bicjjbbko"/></g>`,
		"fallback": "uix-sharp:robot-vacuum-map",
	});
}

export default Component;

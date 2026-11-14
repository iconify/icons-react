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
		"content": `<style>.aogxykb0c {
  d: path("M12.16 20.5H4v-10l8-7l8 7v2.44");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w6l-v-6lb {
  d: path("M16 7V4h2v4.75M15 16h6m-6 4h6m-5.25-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm2 4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="aogxykb0c"/><path class="w6l-v-6lb"/></g>`,
		"fallback": "uix-sharp:mortgage-affordability",
	});
}

export default Component;

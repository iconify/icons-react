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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.it7q92bgo {
  d: path("M3 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m7.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M18 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.mj4fmdq0j {
  d: path("M12 21.5V16L5.25 5.25M12 16l6.75-10.75M14.5 12l-2-6.5");
}
</style><g class="hntgybcog"><path class="mj4fmdq0j"/><path class="it7q92bgo"/></g>`,
		"fallback": "uix:phylogeny",
	});
}

export default Component;

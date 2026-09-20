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
		"content": `<style>.j1y852r1k {
  d: path("m9 5 5 5 -5 5 -5 -5Z");
}

.jbwvw6voa {
  d: path("m15 9 5 5 -5 5 -5 -5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="j1y852r1k"/><path class="jbwvw6voa"/></g>`,
		"fallback": "iconmind:similarity-outline-regular",
	});
}

export default Component;

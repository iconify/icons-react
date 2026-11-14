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
		"content": `<style>.e893ag9rt {
  d: path("m3 9.5l9-6l9 6Zm1 0V21h16V9.5");
}

.rrmcyib6w {
  d: path("M12 13.5c-1.5-1-3.5-1.25-4.5-1V17c1-.25 3 0 4.5 1c1.5-1 3.5-1.25 4.5-1v-4.5c-1-.25-3 0-4.5 1Zm0 0V18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e893ag9rt"/><path class="rrmcyib6w"/></g>`,
		"fallback": "uix-sharp:publisher",
	});
}

export default Component;

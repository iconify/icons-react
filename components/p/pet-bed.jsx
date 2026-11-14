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
		"content": `<style>.c49-ofb-z {
  d: path("M7 10.25a5 2.5 0 1 0 10 0a5 2.5 0 1 0-10 0Z");
}

.ejg2llban {
  d: path("M2.5 11v3a9.5 6 0 0 0 19 0v-3");
}

.j7mg2bt4p {
  d: path("M2.5 11a9.5 6 0 1 0 19 0a9.5 6 0 1 0-19 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j7mg2bt4p"/><path class="ejg2llban"/><path class="c49-ofb-z"/></g>`,
		"fallback": "uix-sharp:pet-bed",
	});
}

export default Component;

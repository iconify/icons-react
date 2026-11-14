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
		"content": `<style>.coi9zkv6i {
  d: path("M4 6v7m0-3.5h2.5m0 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.ia5-n5bsj {
  d: path("M19.5 9.5V21H13v-5m-2.25-6.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="coi9zkv6i"/><path class="ia5-n5bsj"/></g>`,
		"fallback": "uix-sharp:toilet-paper-holder",
	});
}

export default Component;

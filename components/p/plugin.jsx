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
		"content": `<style>.b6pi5ilsw {
  d: path("M6 8h2.5a2.25 2.25 0 1 1 3 0H14v2.75a2.25 2.25 0 1 1 0 3v3.75H6Z");
}

.pko5kmbow {
  d: path("M2.5 13v6A2.5 2.5 0 0 0 5 21.5h14a2.5 2.5 0 0 0 2.5-2.5v-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pko5kmbow"/><path class="b6pi5ilsw"/></g>`,
		"fallback": "uix-sharp:plugin",
	});
}

export default Component;

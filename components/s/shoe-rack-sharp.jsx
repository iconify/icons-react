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
		"content": `<style>.dx6g-kbij {
  d: path("M6.75 11.25v-3.5h2l.4 1.551l1.6-.051h3.5l2.084-.042l.416 2.042Zm.75 8v-3.5h2l.4 1.551l1.6-.051H15l2.084-.042l.416 2.042Z");
}

.oh5eun6ew {
  d: path("M3.75 21.25V4.75h16.5v16.5m-16.5-10h16.5m-16.5 8h16.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="oh5eun6ew"/><path class="dx6g-kbij"/></g>`,
		"fallback": "iconoven:shoe-rack-sharp",
	});
}

export default Component;

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
		"content": `<style>.fjmk1tc6j {
  d: path("M12 4a8 8 0 1 1-8 8");
}

.rjn50hb6w {
  d: path("m2 14l2-2l2 2m2.5-2a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fjmk1tc6j"/><path class="rjn50hb6w"/></g>`,
		"fallback": "uix-sharp:net-retention",
	});
}

export default Component;

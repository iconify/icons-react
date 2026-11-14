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
		"content": `<style>.gq05hacof {
  d: path("M6 11a6 2.75 0 1 0 12 0a6 2.75 0 1 0-12 0Z");
}

.j-uy7bc_e {
  d: path("M4 17.25a8 3.5 0 1 0 16 0a8 3.5 0 1 0-16 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zu_yktbwk {
  d: path("M8.25 5.75a3.75 2.5 0 1 0 7.5 0a3.75 2.5 0 1 0-7.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="j-uy7bc_e"/><path class="gq05hacof"/><path class="zu_yktbwk"/></g>`,
		"fallback": "uix-sharp:massage-hands",
	});
}

export default Component;

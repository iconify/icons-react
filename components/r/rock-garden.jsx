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
		"content": `<style>.gqkur2bfu {
  d: path("M4 17a8 3 0 1 0 16 0a8 3 0 1 0-16 0Z");
}

.u2lgn4tdl {
  d: path("M6.5 11.5a5.5 2.5 0 1 0 11 0a5.5 2.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_agw5__m {
  d: path("M8.25 6.75a3.75 2.25 0 1 0 7.5 0a3.75 2.25 0 1 0-7.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="gqkur2bfu"/><path class="u2lgn4tdl"/><path class="v_agw5__m"/></g>`,
		"fallback": "uix-sharp:rock-garden",
	});
}

export default Component;

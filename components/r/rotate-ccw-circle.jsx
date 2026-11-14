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
		"content": `<style>.o6e5k7b8u {
  d: path("M12 8.25a4.5 4.5 0 1 1-3.897 2.25");
}

.s1gutd67h {
  d: path("m14 6.25l-2 2l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="o6e5k7b8u"/><path class="s1gutd67h"/></g>`,
		"fallback": "uix-sharp:rotate-ccw-circle",
	});
}

export default Component;

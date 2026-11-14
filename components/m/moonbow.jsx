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
		"content": `<style>.deet60mic {
  d: path("M7.5 20.5a5.5 5.5 0 0 1 11 0");
}

.s2mbn-b7e {
  d: path("M4.5 20.5a8.5 8.5 0 0 1 17 0");
}

.teyjcnb4q {
  d: path("M10.5 20.5a2.5 2.5 0 0 1 5 0M8 3a3.5 3.5 0 1 0 .5 5A3 3 0 0 1 8 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s2mbn-b7e"/><path class="deet60mic"/><path class="teyjcnb4q"/></g>`,
		"fallback": "uix-sharp:moonbow",
	});
}

export default Component;

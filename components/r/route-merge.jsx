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
		"content": `<style>.khskffb4i {
  d: path("m9 18.5l3 3l3-3");
}

.n5u7btygh {
  d: path("M6 7c0 4 6 3 6 7v7m6-14c0 4-6 3-6 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z2kv0bchq {
  d: path("M3.5 4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm12 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><g class="ulnmmdpxh"><path class="z2kv0bchq"/><path class="n5u7btygh"/><path class="khskffb4i"/></g>`,
		"fallback": "uix-sharp:route-merge",
	});
}

export default Component;

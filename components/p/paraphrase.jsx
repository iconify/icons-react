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
		"content": `<style>.jiv-zk20y {
  d: path("M3.5 10V8A3.5 3.5 0 0 1 7 4.5h13.5");
}

.o5k6l_b4k {
  d: path("M18.25 2.25L20.5 4.5l-2.25 2.25M20.5 14v2a3.5 3.5 0 0 1-3.5 3.5H3.5");
}

.pk0nmdb2a {
  d: path("M5.75 17.25L3.5 19.5l2.25 2.25M7.5 10h9m-9 4h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jiv-zk20y"/><path class="o5k6l_b4k"/><path class="pk0nmdb2a"/></g>`,
		"fallback": "uix-sharp:paraphrase",
	});
}

export default Component;

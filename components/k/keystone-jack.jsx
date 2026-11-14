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
		"content": `<style>.d4for3r-x {
  d: path("m3 7l3-3h12l3 3v13H3Zm0 0h18");
}

.g3uovdayt {
  d: path("M7.5 10h9v5h-2v2h-5v-2h-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d4for3r-x"/><path class="g3uovdayt"/></g>`,
		"fallback": "uix-sharp:keystone-jack",
	});
}

export default Component;

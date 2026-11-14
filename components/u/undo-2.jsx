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
		"content": `<style>.bpkgm8jdh {
  d: path("M4 9h11a5.5 5.5 0 0 1 0 11H8");
}

.dzv8xmg9v {
  d: path("M8 5L4 9l4 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bpkgm8jdh"/><path class="dzv8xmg9v"/></g>`,
		"fallback": "uix-sharp:undo-2",
	});
}

export default Component;

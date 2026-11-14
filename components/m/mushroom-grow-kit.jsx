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
		"content": `<style>.k0qfvcbfs {
  d: path("M8.5 14a3.5 3.5 0 0 1 7 0Zm3.5 0v4.5");
}

.o4oc42bwf {
  d: path("M6 2.5h12v3l1.5 3v11a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-11l1.5-3Zm0 3h12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o4oc42bwf"/><path class="k0qfvcbfs"/></g>`,
		"fallback": "uix-sharp:mushroom-grow-kit",
	});
}

export default Component;

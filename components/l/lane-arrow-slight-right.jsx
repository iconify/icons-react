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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.va7z2nkam {
  d: path("M10.5 2.5h6v6");
}

.y7myatbod {
  d: path("M8 21.5V13q0-2 2-4l6.5-6.5");
}
</style><g class="ulnmmdpxh"><path class="y7myatbod"/><path class="va7z2nkam"/></g>`,
		"fallback": "uix-sharp:lane-arrow-slight-right",
	});
}

export default Component;

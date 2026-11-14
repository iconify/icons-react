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
		"content": `<style>.c003hd9-z {
  d: path("M5.25 10V7.25h13V18H15.5");
}

.dyl18hg0j {
  d: path("M8 7.25V4.5h13v10.75h-2.75M5.5 15.5h7M10 13l2.5 2.5L10 18");
}

.kslkw9bhh {
  d: path("M2.5 10h13v11h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kslkw9bhh"/><path class="c003hd9-z"/><path class="dyl18hg0j"/></g>`,
		"fallback": "uix-sharp:payment-batch",
	});
}

export default Component;

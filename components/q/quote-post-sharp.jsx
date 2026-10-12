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
		"content": `<style>.l7yfq-b6e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h18.5v16.5H2.75z");
}

.nf_8iiupw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 8.75v2.917l-1.25.833M11 8.75v2.917l-1.25.833");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.wm97cjsry {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 9.25h3M6.75 16h10.5");
}
</style><g class="ux2u0rbkq"><path class="l7yfq-b6e"/><path class="nf_8iiupw"/><path class="wm97cjsry"/></g>`,
		"fallback": "iconoven:quote-post-sharp",
	});
}

export default Component;

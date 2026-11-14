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
		"content": `<style>.mnb31-y4i {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8M7.5 10h6");
}

.u81qlbcma {
  d: path("M11.5 7.5L14 10l-2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mnb31-y4i"/><path class="u81qlbcma"/></g>`,
		"fallback": "uix-sharp:monitor-input",
	});
}

export default Component;

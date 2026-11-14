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
		"content": `<style>.arhpmczqt {
  d: path("m10 6l5.75 3.75L10 13.5Zm0 10.5L9 21m5-4.5l1 4.5m-7.5 0h9");
}

.j2m37yb5l {
  d: path("M2.5 3h19v13.5h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j2m37yb5l"/><path class="arhpmczqt"/></g>`,
		"fallback": "uix-sharp:sprint-demo",
	});
}

export default Component;

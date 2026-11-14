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
		"content": `<style>.i-eunpb_i {
  d: path("M5.5 10.5L8 9l2.25-.25l2.25 2L15 11m3 3.5V18m0 3h.01");
}

.sn7efdbwd {
  d: path("M9 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm1.25 4.5L9 13.5l2.5 3l.5 4m-3-7L7.25 17l-2.5 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sn7efdbwd"/><path class="i-eunpb_i"/></g>`,
		"fallback": "uix-sharp:motion-detected",
	});
}

export default Component;

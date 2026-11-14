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
		"content": `<style>.d8hq-0bpb {
  d: path("M3.5 20.5v-15a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v15Zm-1 0h13");
}

.rr2bbcpoq {
  d: path("M6.5 6.5h5v4h-5Zm8 4.5h1.25a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 0 3 0V9L18 6.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d8hq-0bpb"/><path class="rr2bbcpoq"/></g>`,
		"fallback": "uix-sharp:low-fuel",
	});
}

export default Component;

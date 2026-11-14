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
		"content": `<style>.febfkcgtn {
  d: path("M7.5 21.5v-4h3v4");
}

.irdj4ac9c {
  d: path("M3.5 13L9 7.5l5.5 5.5v8.5h-11Zm16-10.5v19m0-18.75l-5 2.5l5 2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="irdj4ac9c"/><path class="febfkcgtn"/></g>`,
		"fallback": "uix-sharp:sailing-club",
	});
}

export default Component;

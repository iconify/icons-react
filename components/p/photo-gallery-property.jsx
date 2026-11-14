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
		"content": `<style>.a_h6p1b2f {
  d: path("m6 14.5l4.5-4l4.5 4v4H6v-4");
}

.cv5hscb1z {
  d: path("M2.5 7h16v14.5h-16Z");
}

.e-jr8acgi {
  d: path("M5.5 7V5.5A1.5 1.5 0 0 1 7 4h13a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 20 18h-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cv5hscb1z"/><path class="e-jr8acgi"/><path class="a_h6p1b2f"/></g>`,
		"fallback": "uix-sharp:photo-gallery-property",
	});
}

export default Component;

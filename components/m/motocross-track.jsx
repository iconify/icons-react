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
		"content": `<style>.k9ya7ibfj {
  d: path("M4 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm11-3a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ss-_aq1an {
  d: path("m6.5 10l4-4h3M13 2.5h2L17.5 7m-15 13.5l13-7l3 7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k9ya7ibfj"/><path class="ss-_aq1an"/></g>`,
		"fallback": "uix-sharp:motocross-track",
	});
}

export default Component;

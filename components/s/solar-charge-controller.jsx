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
		"content": `<style>.ndcs4s2dm {
  d: path("M11.2 15.5H2.5v-12h17v7.7");
}

.sg5ym-t9a {
  d: path("M5.25 9.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM8 9.5h.01m5.49-2h3M16 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2-2v-2m0 6v2m-2-4h-2m6 0h2m-5.5-1.5l-1.25-1.25m4.25 4.25l1.25 1.25M19.5 16.5l1.25-1.25M16.5 19.5l-1.25 1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ndcs4s2dm"/><path class="sg5ym-t9a"/></g>`,
		"fallback": "uix-sharp:solar-charge-controller",
	});
}

export default Component;

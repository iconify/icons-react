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
		"content": `<style>.h1m_ugbbr {
  d: path("M10.5 2.5h3V7h-3Zm1.5 18h.01");
}

.kmi_5qe8s {
  d: path("M5.5 17.5C6.75 16 7 14 7 12a5 5 0 0 1 10 0c0 2 .25 4 1.5 5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kmi_5qe8s"/><path class="h1m_ugbbr"/></g>`,
		"fallback": "uix-sharp:school-bell",
	});
}

export default Component;

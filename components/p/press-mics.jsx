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
		"content": `<style>.n3dmyib5b {
  d: path("M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5v4m-3.5 0h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.unfms0bro {
  d: path("M10 2.5h4A1.5 1.5 0 0 1 15.5 4v8a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 12V4A1.5 1.5 0 0 1 10 2.5Z");
}
</style><g class="ulnmmdpxh"><path class="unfms0bro"/><path class="n3dmyib5b"/></g>`,
		"fallback": "uix-sharp:press-mics",
	});
}

export default Component;

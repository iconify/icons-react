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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ulx71lwvq {
  d: path("m3.5 8.5l8.5-4l8.5 4v9l-8.5 4l-8.5-4Zm8.5 2v11");
}

.xs4mdcbwe {
  d: path("m3.5 8.5l8.5 4l8.5-4");
}
</style><g class="ulnmmdpxh"><path class="ulx71lwvq"/><path class="xs4mdcbwe"/></g>`,
		"fallback": "uix-sharp:package",
	});
}

export default Component;

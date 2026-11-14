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
		"content": `<style>.ljyg1gabx {
  d: path("M5.5 7.5h13v14h-13Zm3.5 0L12 3m3 4.5L12 3");
}

.twp8-jb3u {
  d: path("M10 11.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM8.5 19c0-1.75 1.5-2.5 3.5-2.5s3.5.75 3.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ljyg1gabx"/><path class="twp8-jb3u"/></g>`,
		"fallback": "uix-sharp:staff-badge",
	});
}

export default Component;

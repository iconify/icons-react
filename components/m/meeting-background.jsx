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

.umf6o6u3u {
  d: path("M2.5 3h19v14h-19ZM12 17v4m-3.5 0h7");
}

.zhi8wdbfp {
  d: path("M9.75 8a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM8 17a4 4 0 0 1 8 0");
}
</style><g class="ulnmmdpxh"><path class="umf6o6u3u"/><path class="zhi8wdbfp"/></g>`,
		"fallback": "uix-sharp:meeting-background",
	});
}

export default Component;

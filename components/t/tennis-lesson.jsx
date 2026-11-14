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
		"content": `<style>.znkv4sbyq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6a3.25 3.25 0 1 0 6.5 0A3.25 3.25 0 1 0 4 6ZM2.5 18c0-3.5 2.25-5.75 4.75-5.75S12 14.5 12 18m3.5-8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-.75 8c0-2 1.25-2.75 3.25-2.75s3.25.75 3.25 2.75M2.5 21h19");
}
</style><path class="znkv4sbyq"/>`,
		"fallback": "uix-sharp:tennis-lesson",
	});
}

export default Component;

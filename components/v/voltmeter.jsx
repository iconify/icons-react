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
		"content": `<style>.ak4-2acqq {
  d: path("M4 10.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0ZM9 18l-2 3.5m8-3.5l2 3.5m-5-10.75L8.5 6");
}

.jbxk5vbrc {
  d: path("M10.5 13.25L12 16l1.5-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ak4-2acqq"/><path class="jbxk5vbrc"/></g>`,
		"fallback": "uix-sharp:voltmeter",
	});
}

export default Component;

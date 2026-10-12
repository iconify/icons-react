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
		"content": `<style>.hrdig6xsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17.25v-4l.63-.62L4 12h3.5l.44-1.17l.62-1.66L9 8h6l.44 1.17l.62 1.66l.44 1.17H20l.63.63l.62.62v5.25H2.75zM2.75 5h18.5M4.5 5v7m15-7v7m-8.75 3.25h2.5m-7.5 0h2m8.5 0h2");
}
</style><path class="hrdig6xsr"/>`,
		"fallback": "iconoven:spoiler-sharp",
	});
}

export default Component;

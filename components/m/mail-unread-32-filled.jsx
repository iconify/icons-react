import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j718afjst {
  fill: currentColor;
  d: path("M27 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-5.5-4c0 2.73 1.99 4.996 4.599 5.427L16 16.864L3.48 10.123l-1.476-.82A4.5 4.5 0 0 1 6.5 5h15.09q-.09.487-.09 1M2 11.588V22.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V11.588l-.526.293l-13 7a1 1 0 0 1-.948 0L2.514 11.874z");
}
</style><path class="j718afjst"/>`,
		"fallback": "fluent:mail-unread-32-filled",
	});
}

export default Component;

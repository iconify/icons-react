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
		"content": `<style>.bdhqdjb3v {
  fill: currentColor;
  d: path("M6 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15.75A3.25 3.25 0 0 1 22.75 22H20v4a4 4 0 0 1-8 0v-4H9.25A3.25 3.25 0 0 1 6 18.75zm2 1v10h16V4h-2v5a1 1 0 1 1-2 0V4h-2v3a1 1 0 1 1-2 0V4zm16 14.75V16H8v2.75c0 .69.56 1.25 1.25 1.25H13a1 1 0 0 1 1 1v5a2 2 0 1 0 4 0v-5a1 1 0 0 1 1-1h3.75c.69 0 1.25-.56 1.25-1.25");
}
</style><path class="bdhqdjb3v"/>`,
		"fallback": "fluent:paint-brush-32-regular",
	});
}

export default Component;

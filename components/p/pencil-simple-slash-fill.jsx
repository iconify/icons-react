import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h5h64gb1y {
  fill: currentColor;
  d: path("m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0l-44.36 44.36a4 4 0 0 0-.14 5.52l58.73 64.6a4 4 0 0 0 5.79.13l47.3-47.3a16 16 0 0 0 0-22.63M192 108.69L147.32 64l24-24L216 84.69Zm21.92 101.93a8 8 0 1 1-11.84 10.76l-47.68-52.46l-50.4 50.39A15.86 15.86 0 0 1 92.69 224H48a16 16 0 0 1-16-16v-44.69A15.9 15.9 0 0 1 36.68 152l53.6-53.6l-48-52.82a8.18 8.18 0 0 1-.37-10.75a8 8 0 0 1 12-.21Z");
}
</style><path class="h5h64gb1y"/>`,
		"fallback": "ph:pencil-simple-slash-fill",
	});
}

export default Component;

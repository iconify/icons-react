import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z98jd7tdv {
  fill: currentColor;
  d: path("M18.007 4.033a2 2 0 0 0-1.987-1.997l-4.89-.032a2 2 0 0 0-1.426.584L3.022 9.252a2 2 0 0 0-.002 2.83l4.949 4.95a2 2 0 0 0 2.828 0l6.631-6.632a2 2 0 0 0 .586-1.417zM14 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="z98jd7tdv"/>`,
		"fallback": "fluent:tag-20-filled",
	});
}

export default Component;

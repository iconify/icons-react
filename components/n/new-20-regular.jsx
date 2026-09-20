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
		"content": `<style>.a5kbrhkhg {
  fill: currentColor;
  d: path("M15.5 3a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5M6.146 6.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708M3.5 15a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z");
}
</style><path class="a5kbrhkhg"/>`,
		"fallback": "fluent:new-20-regular",
	});
}

export default Component;

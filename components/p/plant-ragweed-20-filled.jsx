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
		"content": `<style>.y0s-q70-o {
  fill: currentColor;
  d: path("M7.5 4.5a2.5 2.5 0 1 1 4.94.548a2 2 0 0 1 .883 3.452A2 2 0 0 1 12 12h-1.5v4.293l3.146-3.147a.5.5 0 0 1 .708.708L10.5 17.707v.793a.5.5 0 0 1-1 0v-.793l-3.854-3.853a.5.5 0 0 1 .708-.708L9.5 16.293V12H8a2 2 0 0 1-1.323-3.5a2 2 0 0 1 .883-3.452Q7.5 4.783 7.5 4.5");
}
</style><path class="y0s-q70-o"/>`,
		"fallback": "fluent:plant-ragweed-20-filled",
	});
}

export default Component;

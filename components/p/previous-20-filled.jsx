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
		"content": `<style>.p-jlzp0rn {
  fill: currentColor;
  d: path("M17 4.252c0-1-1.116-1.595-1.947-1.038L6.554 8.921a1.25 1.25 0 0 0-.007 2.071l8.5 5.793A1.25 1.25 0 0 0 17 15.752zM3 3.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0z");
}
</style><path class="p-jlzp0rn"/>`,
		"fallback": "fluent:previous-20-filled",
	});
}

export default Component;

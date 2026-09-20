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
		"content": `<style>.pv9qmukdf {
  fill: currentColor;
  d: path("M3 4.252c0-1 1.116-1.595 1.947-1.038l8.499 5.707a1.25 1.25 0 0 1 .007 2.071l-8.5 5.793A1.25 1.25 0 0 1 3 15.752zM17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 1 0 1 0z");
}
</style><path class="pv9qmukdf"/>`,
		"fallback": "fluent:next-20-filled",
	});
}

export default Component;

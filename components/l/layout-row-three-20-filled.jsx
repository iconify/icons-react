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
		"content": `<style>.wab03dvhs {
  fill: currentColor;
  d: path("M17 7V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1zM3 8v4h14V8zm0 6v-1h14v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3");
}
</style><path class="wab03dvhs"/>`,
		"fallback": "fluent:layout-row-three-20-filled",
	});
}

export default Component;

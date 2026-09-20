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
		"content": `<style>.fsxm7vbwq {
  fill: currentColor;
  d: path("M4 15a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3z");
}
</style><path class="fsxm7vbwq"/>`,
		"fallback": "fluent:rectangle-portrait-20-filled",
	});
}

export default Component;

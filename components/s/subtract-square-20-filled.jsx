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
		"content": `<style>.vt_7eabbe {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm.5 6.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1");
}
</style><path class="vt_7eabbe"/>`,
		"fallback": "fluent:subtract-square-20-filled",
	});
}

export default Component;

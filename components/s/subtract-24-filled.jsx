import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lsfmj_w-i {
  fill: currentColor;
  d: path("M3.996 13H20a1 1 0 1 0 0-2H3.996a1 1 0 1 0 0 2");
}
</style><path class="lsfmj_w-i"/>`,
		"fallback": "fluent:subtract-24-filled",
	});
}

export default Component;

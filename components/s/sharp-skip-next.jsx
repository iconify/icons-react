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
		"content": `<style>.u-qcybbwx {
  fill: currentColor;
  d: path("m6 18l8.5-6L6 6zM16 6v12h2V6z");
}
</style><path class="u-qcybbwx"/>`,
		"fallback": "ic:sharp-skip-next",
	});
}

export default Component;

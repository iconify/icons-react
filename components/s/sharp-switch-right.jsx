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
		"content": `<style>.ea61t7v1f {
  fill: currentColor;
  d: path("M15.5 15.38V8.62L18.88 12zM14 19l7-7l-7-7zm-4 0V5l-7 7z");
}
</style><path class="ea61t7v1f"/>`,
		"fallback": "ic:sharp-switch-right",
	});
}

export default Component;

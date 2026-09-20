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
		"content": `<style>.p7norhswx {
  fill: currentColor;
  d: path("M15.75 4a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V4.75a.75.75 0 0 1 .75-.75m-5-2a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-1.5 0V2.75a.75.75 0 0 1 .75-.75M6.5 6.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="p7norhswx"/>`,
		"fallback": "fluent:text-align-center-rotate-90-20-filled",
	});
}

export default Component;

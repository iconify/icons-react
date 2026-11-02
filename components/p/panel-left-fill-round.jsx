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
		"content": `<style>.s32cdob1o {
  fill: currentColor;
  d: path("M16 21H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 21m-6-2h6a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-6Z");
}
</style><path class="s32cdob1o"/>`,
		"fallback": "coolicons:panel-left-fill-round",
	});
}

export default Component;

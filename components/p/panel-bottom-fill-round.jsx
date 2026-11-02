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
		"content": `<style>.hhwqw6bfx {
  fill: currentColor;
  d: path("M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 21H8a5 5 0 0 1-5-5Zm16 0a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v6h14Z");
}
</style><path class="hhwqw6bfx"/>`,
		"fallback": "coolicons:panel-bottom-fill-round",
	});
}

export default Component;

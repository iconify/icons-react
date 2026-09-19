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
		"content": `<style>.vnob25r9m {
  fill: currentColor;
  d: path("M8 5v14l11-7z");
}
</style><path class="vnob25r9m"/>`,
		"fallback": "ic:play-arrow",
	});
}

export default Component;

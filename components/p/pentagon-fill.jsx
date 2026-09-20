import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fg2-5b5mj {
  fill: currentColor;
  d: path("m231.26 105.19l-32 107.54l-.06.17A15.94 15.94 0 0 1 184 224H72a15.94 15.94 0 0 1-15.2-11.1l-.06-.17l-32-107.54a16 16 0 0 1 5.7-17.63l87.92-68.31l.18-.14a15.93 15.93 0 0 1 18.92 0l.18.14l87.92 68.31a16 16 0 0 1 5.7 17.63");
}
</style><path class="fg2-5b5mj"/>`,
		"fallback": "ph:pentagon-fill",
	});
}

export default Component;

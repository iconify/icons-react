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
		"content": `<style>.ass4qu_1n {
  fill: currentColor;
  d: path("m224.35 89.15l-87.94-68.33l-.13-.1a14 14 0 0 0-16.56 0l-.13.1l-87.94 68.33a14 14 0 0 0-5 15.45l32 107.56v.13A14 14 0 0 0 72 222h112a14 14 0 0 0 13.33-9.71s0-.08 0-.13l32-107.56a14 14 0 0 0-4.98-15.45M217.9 101v.12l-32 107.54A2 2 0 0 1 184 210H72a2 2 0 0 1-1.89-1.34l-32-107.54V101a2 2 0 0 1 .72-2.23l.13-.1l87.91-68.3a2 2 0 0 1 2.28 0l87.91 68.3l.13.1a2 2 0 0 1 .71 2.23");
}
</style><path class="ass4qu_1n"/>`,
		"fallback": "ph:pentagon-light",
	});
}

export default Component;

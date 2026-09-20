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
		"content": `<style>.d06kw1b8p {
  fill: currentColor;
  d: path("M162.83 157.17a4 4 0 0 1-5.66 5.66l-64-64a4 4 0 0 1 5.66-5.66ZM228 128A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92");
}
</style><path class="d06kw1b8p"/>`,
		"fallback": "ph:prohibit-inset-thin",
	});
}

export default Component;

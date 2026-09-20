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
		"content": `<style>.dir7tvp7v {
  fill: currentColor;
  d: path("M246 144a6 6 0 0 1-6 6h-48a6 6 0 0 1-4.8-9.6l43.17-57.55A18 18 0 1 0 199 66a6 6 0 0 1-11.31-4a30.1 30.1 0 0 1 4.31-8a30 30 0 0 1 48 36.06L204 138h36a6 6 0 0 1 6 6m-98.07-68.53a6 6 0 0 0-8.46.6L92 130.84L44.53 76.07a6 6 0 1 0-9.06 7.86L84.06 140l-48.59 56.07a6 6 0 1 0 9.06 7.86L92 149.16l47.47 54.77a6 6 0 0 0 9.06-7.86L99.94 140l48.59-56.07a6 6 0 0 0-.6-8.46");
}
</style><path class="dir7tvp7v"/>`,
		"fallback": "ph:text-superscript-light",
	});
}

export default Component;

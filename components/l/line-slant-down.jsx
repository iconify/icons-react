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
		"content": `<style>.wj_a6wwur {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M.808.808a1 1 0 0 1 1.414 0l16.97 16.97a1 1 0 0 1-1.414 1.414L.808 2.222a1 1 0 0 1 0-1.414");
}
</style><path clip-rule="evenodd" class="wj_a6wwur"/>`,
		"fallback": "pepicons-pop:line-slant-down",
	});
}

export default Component;

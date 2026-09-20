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
		"content": `<style>.fenq5cbte {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M.808 19.193a1 1 0 0 1 0-1.415L17.778.808a1 1 0 1 1 1.414 1.414l-16.97 16.97a1 1 0 0 1-1.414 0");
}
</style><path clip-rule="evenodd" class="fenq5cbte"/>`,
		"fallback": "pepicons-pop:line-slant-up",
	});
}

export default Component;

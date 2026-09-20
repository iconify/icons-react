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
		"content": `<style>.bv74l819d {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1 10a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1");
}
</style><path clip-rule="evenodd" class="bv74l819d"/>`,
		"fallback": "pepicons-pop:line-x",
	});
}

export default Component;

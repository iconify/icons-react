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
		"content": `<style>.o7ik_yyie {
  fill: currentColor;
  d: path("M14 6a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8zm-8 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}
</style><path class="o7ik_yyie"/>`,
		"fallback": "fluent:toggle-left-20-filled",
	});
}

export default Component;

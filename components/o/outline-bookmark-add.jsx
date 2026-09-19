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
		"content": `<style>.o6tbcjbyj {
  fill: currentColor;
  d: path("M17 11v6.97l-5-2.14l-5 2.14V5h6V3H7c-1.1 0-2 .9-2 2v16l7-3l7 3V11zm4-4h-2v2h-2V7h-2V5h2V3h2v2h2z");
}
</style><path class="o6tbcjbyj"/>`,
		"fallback": "ic:outline-bookmark-add",
	});
}

export default Component;

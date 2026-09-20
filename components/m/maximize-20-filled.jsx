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
		"content": `<style>.b1b_rl7ib {
  fill: currentColor;
  d: path("M3 5.25A2.25 2.25 0 0 1 5.25 3h9.5A2.25 2.25 0 0 1 17 5.25v9.5A2.25 2.25 0 0 1 14.75 17h-9.5A2.25 2.25 0 0 1 3 14.75zm2.25-.75a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75z");
}
</style><path class="b1b_rl7ib"/>`,
		"fallback": "fluent:maximize-20-filled",
	});
}

export default Component;

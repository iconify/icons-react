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
		"content": `<style>.c_n_1v4bc {
  fill: currentColor;
  d: path("M17.5 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-13-3h9.535Q14 3.245 14 3.5a3.5 3.5 0 0 0 1.755 3.035L10 9.92L2.015 5.223A2.5 2.5 0 0 1 4.5 3m5.754 7.931l6.742-3.967a3.5 3.5 0 0 0 1.004 0V13.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5V6.373l7.747 4.558a.5.5 0 0 0 .507 0");
}
</style><path class="c_n_1v4bc"/>`,
		"fallback": "fluent:mail-unread-20-filled",
	});
}

export default Component;

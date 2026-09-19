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
		"content": `<style>.j2zh8unkj {
  fill: currentColor;
  d: path("M11.49 16c.88 0 1.7-.26 2.39-.7l2.44 2.44l1.42-1.42l-2.44-2.43c.44-.7.7-1.51.7-2.39C16 9.01 13.99 7 11.5 7S7 9.01 7 11.5S9.01 16 11.49 16m.01-7a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z");
}
</style><path class="j2zh8unkj"/>`,
		"fallback": "ic:outline-pageview",
	});
}

export default Component;

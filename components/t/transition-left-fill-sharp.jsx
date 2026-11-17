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
		"content": `<style>.kco4p4b3m {
  fill: currentColor;
  d: path("M17 10a5 5 0 0 0-9.982-.432l1.275-1.275a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414l1.304 1.304A7 7 0 0 1 19 10v2a1 1 0 0 1-2 0ZM3.236 16.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338m12 0a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338");
}
</style><path class="kco4p4b3m"/>`,
		"fallback": "coolicons:transition-left-fill-sharp",
	});
}

export default Component;

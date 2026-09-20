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
		"content": `<style>.do73-hb6c {
  fill: currentColor;
  d: path("M3 15V9h3.5q.6 0 1.05.45T8 10.5v1q0 .6-.45 1.05T6.5 13h-2v2zm6.5 0V9H11v2h2V9h1.5v6H13v-2.5h-2V15zm7 0V9H20q.6 0 1.05.45t.45 1.05v1q0 .6-.45 1.05T20 13h-2v2zm-12-3.5h2v-1h-2zm13.5 0h2v-1h-2z");
}
</style><path class="do73-hb6c"/>`,
		"fallback": "material-symbols:php-outline",
	});
}

export default Component;

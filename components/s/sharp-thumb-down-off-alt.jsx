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
		"content": `<style>.onumwmbhr {
  fill: currentColor;
  d: path("M19 3h4v12h-4zM1 11.6V16h8.31l-1.12 5.38L9.83 23L17 15.82V3H4.69zM15 5v9.99l-4.34 4.35l.61-2.93l.5-2.41H3v-1.99L6.01 5z");
}
</style><path class="onumwmbhr"/>`,
		"fallback": "ic:sharp-thumb-down-off-alt",
	});
}

export default Component;
